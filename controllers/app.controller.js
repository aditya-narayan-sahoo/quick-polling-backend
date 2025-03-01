import Poll from "../models/poll.model.js";

export const createPoll = async (req, res) => {
  try {
    const { question, options } = req.body;
    const poll = new Poll({
      question,
      options: options.map((option) => ({ text: option, votes: 0 })),
    });
    await poll.save();
    res.status(201).json(poll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create poll" });
  }
};

export const votePoll = async (req, res) => {
  try {
    const { optionId } = req.body;
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }
    const option = poll.options.find((opt) => opt._id.toString() === optionId);
    if (!option) {
      return res.status(404).json({ error: "Option not found" });
    }
    option.votes += 1;
    await poll.save();

    res.status(200).json(poll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to vote on poll" });
  }
};

export const getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    if (polls.length === 0) {
      return res.status(404).json({ error: "No polls found" });
    }
    res.status(200).json(polls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch polls" });
  }
};

export const getPoll = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }
    res.status(200).json(poll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch poll" });
  }
};

export const deletePoll = async (req, res) => {
  try {
    const poll = await Poll.findByIdAndDelete(req.params.id);
    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }
    res.status(200).json({ message: "Poll deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete poll" });
  }
};

const service = require('../services/screening.service');

const getAllScreenings = async (req, res) => {
  const data = await service.getAll();
  res.json(data);
};

const getScreeningById = async (req, res) => {
  const id = parseInt(req.params.id);
  const item = await service.getById(id);
  item ? res.json(item) : res.status(404).json({ message: 'Screening not found' });
};

const createScreening = async (req, res) => {
  const item = await service.create(req.body);
  res.status(201).json(item);
};

const updateScreening = async (req, res) => {
  const id = parseInt(req.params.id);
  const item = await service.update(id, req.body);
  item ? res.json(item) : res.status(404).json({ message: 'Screening not found' });
};

const deleteScreening = async (req, res) => {
  const id = parseInt(req.params.id);
  const removed = await service.remove(id);
  removed ? res.json({ message: 'Deleted' }) : res.status(404).json({ message: 'Screening not found' });
};

module.exports = {
  getAllScreenings,
  getScreeningById,
  createScreening,
  updateScreening,
  deleteScreening,
};

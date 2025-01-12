import React, { useState } from 'react';

const UploadMovie = () => {
  const [formData, setFormData] = useState({
    title: '',
    release_date: '',
    rating: '',
    description: '',
  });

//text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div style={textStyle} className="container mt-5">
      <h1>Upload Movie</h1>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Movie Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter movie title"
            required
          />
        </div>

        {/* Release Date */}
        <div className="mb-3">
          <label htmlFor="release_date" className="form-label">Release Date</label>
          <input
            type="release_date"
            className="form-control"
            id="release_date"
            name="release_date"
            value={formData.release_date}
            onChange={handleChange}
            placeholder="Enter the release date"
            required
          />
        </div>

        {/* Rating */}
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input
            type="rating"
            className="form-control"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Enter the rating"
            required
          />
        </div>

        {/* Duration */}
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration</label>
          <input
            type="duration"
            className="form-control"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Enter the duration"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Enter a description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
};

  const textStyle = {
      color: '#fff',
      fontSize: '1.5rem',
      marginBottom: '10px',
  };

export default UploadMovie;

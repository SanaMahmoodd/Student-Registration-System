function StudentFilters({
  searchTerm,
  setSearchTerm,
  courseFilter,
  setCourseFilter,
  gpaFilter,
  setGpaFilter,
  courses,
}) {
  return (
    <div className="filters-card glass">
      <h2>Filters</h2>

      <div className="filters-grid">
        <div className="input-group">
          <label>Search by Name</label>
          <input
            type="text"
            placeholder="Search student..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Course</label>
          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
          >
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>GPA Filter</label>
          <select
            value={gpaFilter}
            onChange={(e) => setGpaFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="High">High (3.5 - 4.0)</option>
            <option value="Medium">Medium (2.0 - 3.4)</option>
            <option value="Low">Low (Below 2.0)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default StudentFilters;
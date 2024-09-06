import { useState } from 'react';
import styles from '../styles/Settings.module.css';

const Settings = () => {
  const [filters, setFilters] = useState({
    showCharts: true,
    showTables: true,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters({ ...filters, [name]: checked });
  };

  return (
    <div className={styles.settings}>
      <h1>Settings</h1>
      <form>
        <label>
          <input
            type="checkbox"
            name="showCharts"
            checked={filters.showCharts}
            onChange={handleCheckboxChange}
          />
          Show Charts
        </label>
        <label>
          <input
            type="checkbox"
            name="showTables"
            checked={filters.showTables}
            onChange={handleCheckboxChange}
          />
          Show Tables
        </label>
      </form>
    </div>
  );
};

export default Settings;

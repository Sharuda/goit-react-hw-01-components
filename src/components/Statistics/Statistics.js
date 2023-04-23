import PropTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title ? title : ''}</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Statistics;

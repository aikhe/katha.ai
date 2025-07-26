import styles from './index.module.css';

const Sample = () => {
  return (
    <div>
      <p className="border-4 text-4xl font-bold text-amber-500">sample text</p>
      <div className={styles.sample}>sample</div>
    </div>
  );
};

export default Sample;

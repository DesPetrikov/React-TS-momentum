import classes from './SvgAudioAnchor.module.css';

export const SvgAudioAnchor = () => {
  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path d="M6 6v52h52V6H6zm2 2h48v40H8V8z" />
      <path d="M26 18v15.538A5.972 5.972 0 0 0 22 32c-3.311 0-6 2.688-6 6s2.689 6 6 6c3.31 0 6-2.688 6-6V21.637l18-3.273v11.175A5.968 5.968 0 0 0 42 28c-3.311 0-6 2.688-6 6s2.689 6 6 6c3.31 0 6-2.688 6-6V12l-22 4v2zm-4 24c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4zm20-4c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4z" />
    </svg>
  );
};

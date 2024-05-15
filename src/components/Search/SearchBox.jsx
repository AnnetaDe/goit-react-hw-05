import s from './SearchBox.module.css';
export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.search}>
      <label>
        Find movies
        <form>
          <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            onInput={e => {
              console.log('onInput', e.target.value);
            }}
          />
        </form>
      </label>
    </div>
  );
};

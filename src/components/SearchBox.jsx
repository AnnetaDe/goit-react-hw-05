export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
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
    </div>
  );
};

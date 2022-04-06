import filtersOptions from "../lib/filtersOptions.json";
import useCard from "../lib/hooks/useCard";

function Filter() {
  const { onChange } = useCard();

  return (
    <div className="text-center mb-12">
      <div className="flex flex-row justify-center">
        <input
          type="text"
          name="name"
          placeholder="Name…"
          className="input rounded-l-full w-32 rounded-r-none placeholder:text-gray-400"
          onChange={onChange}
        ></input>
        <div className="divider divider-horizontal m-0 w-1" />

        <select
          className="select rounded-none font-normal text-gray-400 w-24"
          name="type"
          onChange={onChange}
        >
          <option>Type</option>
          {filtersOptions.type.map((option, idx) => (
            <option value={option} key={idx}>
              {option}
            </option>
          ))}
        </select>
        <div className="divider divider-horizontal m-0 w-1" />
        <select
          className="select rounded-r-full rounded-l-none font-normal text-gray-400 w-24"
          name="rarity"
          onChange={onChange}
        >
          <option>Rarity</option>
          {filtersOptions.rarity.map((option, idx) => (
            <option value={option} key={idx}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filter;

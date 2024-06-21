import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "hooks/useDebounce";
import { getSearchResult } from "http/siteApi";
import { SearchItem, SearchSection } from "shared/types/Common";
import SearchImage from "shared/assets/icons/search.svg?react";
import classes from "./HeaderSearch.module.scss";
import useClickOutside from "hooks/useClickOutside";

interface HeaderSearchProps {
  className?: string;
}

export const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  const { className = "" } = props;

  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [results, setResults] = useState<SearchSection[]>([]);
  const debouncedSearch = useDebounce(value, 500); // Задержка в 500 мс

  const inputRef = useRef<HTMLInputElement | null>(null);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const handleClickResultLink = () => {
    setShow(false);
  };

  const handleClickOnInput = () => {
    if (value.length > 0 && results.length > 0) {
      setShow(true);
    }
  };

  const __load_async_search = async () => {
    let data = await getSearchResult(debouncedSearch);
    if (data.result) {
      setResults(data.list);
      if (data.list.length > 0) setShow(true);
    }
  };

  useEffect(() => {
    __load_async_search();
  }, [debouncedSearch]);

  useClickOutside([inputRef, resultsRef], () => setShow(false));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ width: '100%' }}>
      <div className={clsx(classes.search, className)}>
        <span className={classes.icon}>
          <SearchImage />
        </span>
        <input
          ref={inputRef}
          onClick={handleClickOnInput}
          className={classes.input}
          type="text"
          placeholder="Поиск"
          value={value}
          onChange={handleChange}
        />
      </div>

      {results.length > 0 && value.length > 0 && show && (
        <div className={classes.serachResultBlock} ref={resultsRef}>
          {results.map((section: SearchSection, index: number) => (
            <div key={index}>
              <div className={classes['section-title']}>{section.section}</div>
              <div className={classes['section-list']}>
                {section.list.map((item: SearchItem, itemIndex: number) => (
                  <div key={itemIndex} onClick={handleClickResultLink}>
                    <Link to={item.link}>{item.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

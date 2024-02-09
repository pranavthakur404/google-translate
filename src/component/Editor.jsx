import { useEffect, useRef, useState } from "react";
import styles from "../component_css/Editor.module.css";
import Container from "./Container";
function Editor() {
  const limitRef = useRef();
  const displayRef = useRef();
  const [data, setData] = useState({
    text: "",
    lang: "hi-IN",
  });

  const handleChange = (e) => {
    setData((prevData) => {
      return { ...prevData, text: e.target.value };
    });
  };

  const handleSelect = (e) => {
    setData((prevData) => {
      return { ...data, lang: e.target.value };
    });
  };

  const handleSubmit = async () => {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${data.text}&langpair=en-GB|${data.lang}`
    );
    const resData = await res.json();
    console.log(resData);
    displayRef.current.value =
      resData?.matches[1]?.translation || resData?.matches[0]?.translation;
  };

  useEffect(() => {
    if (data.text.length == 2000) {
      limitRef.current.style.color = "red";
    } else {
      limitRef.current.style.color = "silver";
    }
    limitRef.current.textContent = `${data.text.length}/2000`;
  }, [data.text]);

  return (
    <>
      <Container>
        <div className={styles.editor}>
          <div className={styles.input}>
            <p className={styles.text}>Auto Detect</p>
            <textarea
              name="text"
              id="text"
              rows="10"
              value={data.text}
              onChange={handleChange}
              autoFocus
              maxLength="2000"
            ></textarea>
            <span ref={limitRef} className={styles.countlimit}>
              200/2000
            </span>
          </div>
          <div className={styles.display}>
            <div className={styles.langSelection}>
              <p>Translate to</p>
              <select
                name="lang"
                id="lang"
                value={data.lang}
                onChange={handleSelect}
              >
                <option value="sq-AL">Albanian</option>
                <option value="ar-SA">Arabic</option>
                <option value="bn-IN">Bengali</option>
                <option value="ca-ES">Catalan</option>
                <option value="cs-CZ">Czech</option>
                <option value="da-DK">Danish</option>
                <option value="nl">Dutch</option>
                <option value="nl-NL">English</option>
                <option value="et-EE">Estonian</option>
                <option value="fi-FI">Finnish</option>
                <option value="fr-FR">French</option>
                <option value="de-DE">German</option>
                <option value="el-GR">Greek</option>
                <option value="he-IL">Hebrew</option>
                <option value="hi-IN">Hindi</option>
              </select>
            </div>
            <textarea
              name="text"
              id="text"
              rows="10"
              ref={displayRef}
              readOnly
            ></textarea>
          </div>
        </div>
        <button className={styles.translateBtn} onClick={handleSubmit}>
          Translate
        </button>
      </Container>
    </>
  );
}

export default Editor;

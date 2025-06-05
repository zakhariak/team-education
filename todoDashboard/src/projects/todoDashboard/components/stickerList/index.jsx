import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Sticker from "../stickers/sticker";
import Modal from "../modal";
import styles from "./styles.module.scss";

const StickerList = ({ data }) => {
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState(
    data.map((item) => {
      return {
        ...item,
        selected: isSelectedAll,
        id: nanoid(5),
      };
    })
  );

  useEffect(() => {
    const newList = list.map((item) => {
      return {
        ...item,
        selected: isSelectedAll,
      };
    });
    setList(newList);
  }, [isSelectedAll]);

  useEffect(() => {
    if (list) {
      const temp = list.map((item) => item.selected);
      const allSelected = temp.every((item) => item);
      const allUnselected = temp.every((item) => !item);
      if (allSelected) {
        setIsSelectedAll(true);
        return;
      }
      if (allUnselected) {
        setIsSelectedAll(false);
      }
    }
  }, [list]);

  const removeListElem = (el) => {
    setList(list.filter((item) => item !== el));
  };

  const deleteAll = () => {
    setList([]);
  };

  const onSelectHandler = (item) => {
    const index = list.indexOf(item);

    const changedList = list.toSpliced(index, 1, {
      ...item,
      selected: !item.selected,
    });

    setList(changedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    setList([{ ...formProps, date: Date.now() }, ...list]);
    setShowModal(false);
  };

  return (
    <>
      {!!list.length && (
        <div className={styles.selectAllBtn}>
          <button onClick={() => setIsSelectedAll((prev) => !prev)}>
            {isSelectedAll ? "Unselect All" : "Select All"}
          </button>
          <button onClick={deleteAll}>Delete All</button>
          <button onClick={() => setShowModal(true)}>Add New Sticker</button>
        </div>
      )}

      <div className={styles.stikerList}>
        {list &&
          list.map((item) => (
            <Sticker
              key={item.id}
              selected={item.selected}
              onSelectHandler={() => onSelectHandler(item)}
              removeListElem={() => removeListElem(item)}
            >
              {item.content}
            </Sticker>
          ))}
      </div>
      <Modal
        show={showModal}
        onClose={(e) => {
          e.stopPropagation();
          setShowModal(false);
        }}
      >
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <input name="author" type="text" placeholder="Author" required />
          <input name="content" type="text" placeholder="Content" required />
          <button type="submit">Save</button>
        </form>
      </Modal>
    </>
  );
};

export default StickerList;

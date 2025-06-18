import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Modal from "../modal";
import styles from "./styles.module.scss";
import FlipableSticker from "../stickers/flipableSticker";

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
    setList((prevList) =>
      prevList.map((item) => ({
        ...item,
        selected: isSelectedAll,
      }))
    );
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

  const removeListElem = (event, el) => {
    event.stopPropagation();

    setList(list.filter((item) => item !== el));
  };

  const deleteAll = () => {
    setList([]);
  };

  const onSelectHandler = (event, item) => {
    event.stopPropagation();
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

      <div className={styles.stickerList}>
        {list &&
          list.map((item) => (
            <FlipableSticker
              key={item.id}
              frontSide={
                <div className={styles.stickerFrontSide}>
                  <div className={styles.stickerHeader}>
                    <button onClick={(event) => removeListElem(event, item)}>
                      X
                    </button>
                    <button onClick={(event) => onSelectHandler(event, item)}>
                      {item.selected ? "+" : "-"}
                    </button>
                  </div>
                  <div className={styles.stickerBody}>{item.content}</div>
                </div>
              }
              backSide={
                <div className={styles.stickerBackSide}>
                  <div>{item.author}</div>
                  <div>{new Date(item.date).toDateString()}</div>
                </div>
              }
            />
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

import React from "react";
import AdminPlace from "./AdminPlace";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import useStyles from "./style";
import { ReactComponent as Plus } from "../../../img/plus.svg";

interface IProps {
  places: [];
  onDelete: (id: number) => void;
  showMenu: (id: number) => void;
  onAdd: () => void;
  changeValueForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showMenuState: boolean;
  closeMenu: () => void;
  editItem: () => void;
  id: number;
}

export default function AdminPlaces({
  places,
  onDelete,
  showMenu,
  onAdd,
  changeValueForm,
  showMenuState,
  closeMenu,
  editItem,
  id,
}: IProps) {
  const classes = useStyles();

  const elements = places.map((item: { id: number; reserve: string }) => {
    return (
      <AdminPlace
        key={item.id}
        id={item.id}
        status={item.reserve}
        showMenu={() => showMenu(item.id)}
        onDelete={() => onDelete(item.id)}
      />
    );
  });

  return (
    <main className="main">
      <div className={classes.main__addWrapper}>
        <div className={classes.main__add} onClick={onAdd}>
          <Plus />
          <p>Добавить</p>
        </div>
      </div>

      <div
        className={classes.main__logoWrapper}
        style={{ position: "absolute" }}
      >
        <div className={classes.main__logo} style={{ position: "relative" }}>
          <span>P</span>
        </div>
      </div>

      <div className={classes.main__wrapper}>
        <section className={classes.places}>
          <ul className={classes.places__list}>{elements}</ul>
        </section>
      </div>

      {showMenuState && (
        <section className={classes.edit} style={{ position: "fixed" }}>
          <div className={classes.edit__title}>
            Парковочное место
            <p className={classes.edit__number}>{id}</p>
          </div>
          <form className={classes.edit__form}>
            <p className={classes.edit__name}>Статус</p>
            <FormControl onChange={changeValueForm} variant="outlined">
              <Select
                className="edit__select"
                style={{
                  borderRadius: "0px",
                  width: "247px",
                  fontFamily: "Open Sans",
                  fontSize: "13px",
                  color: "#90949D",
                }}
                native
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option>выбрать</option>
                <option value="free" id="edit__free">
                  Свободно
                </option>
                <option value="booked">Занято</option>
              </Select>
            </FormControl>
            <div className={classes.edit__group}>
              <Button
                onClick={closeMenu}
                className="edit__cancel"
                variant="contained"
                style={{
                  borderRadius: "0px",
                  boxShadow: "none",
                  backgroundColor: "#E6E9F1",
                  width: "116px",
                  color: "#676767",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  fontWeight: "bold",
                  fontFamily: "Open Sans",
                }}
              >
                отмена
              </Button>
              <Button
                onClick={editItem}
                className="edit__save"
                variant="contained"
                style={{
                  borderRadius: "0px",
                  boxShadow: "none",
                  backgroundColor: "#44699F",
                  width: "116px",
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  fontWeight: "bold",
                  fontFamily: "Open Sans",
                }}
              >
                сохранить
              </Button>
            </div>
          </form>
        </section>
      )}
    </main>
  );
}

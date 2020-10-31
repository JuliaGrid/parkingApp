import React from "react";
import UserPlace from "./UserPlace";
import Logo from "../../Logo/Logo";
import useStyles from "../Admin/style";

interface IProps {
  places: [];
  reservePlace: (id: number) => void;
  deleteReservePlace: (id: number) => void;
}

export default function UserPlaces({
  places,
  reservePlace,
  deleteReservePlace,
}: IProps) {
  const classes = useStyles();

  const elements = places.map((item: { id: number; reserve: string }) => {
    return (
      <UserPlace
        key={item.id}
        number={item.id}
        status={item.reserve}
        reservePlace={reservePlace}
        deleteReservePlace={deleteReservePlace}
      />
    );
  });

  return (
    <main className="main">
      <Logo />

      <div className="main__wrapper">
        <section className={classes.places}>
          <ul className={classes.places__list}>{elements}</ul>
        </section>
      </div>
    </main>
  );
}

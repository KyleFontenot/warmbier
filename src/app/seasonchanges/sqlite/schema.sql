CREATE TABLE releases(
   id INT PRIMARY KEY,
   version           TEXT    NOT NULL,
   description        TEXT NOT NULL,
);


CREATE TABLE changes(
   id INT PRIMARY KEY     NOT NULL,
   version           REAL    NOT NULL,
   description        TEXT,
  FOREIGN KEY(versoin) REFERENCES releases(version)
);

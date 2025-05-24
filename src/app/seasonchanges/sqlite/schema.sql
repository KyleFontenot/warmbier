CREATE TABLE releases(
   id INT PRIMARY KEY     NOT NULL,
   version           REAL    NOT NULL,
   description        TEXT,
);


CREATE TABLE changes(
   id INT PRIMARY KEY     NOT NULL,
   version           REAL    NOT NULL,
   description        TEXT,
  FOREIGN KEY(versoin) REFERENCES releases(version)
);

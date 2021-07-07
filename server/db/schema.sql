DROP DATABASE IF EXISTS rater;
CREATE DATABASE rater;

\c rater;

CREATE TABLE trips (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <=5),
);

CREATE TABLE trips (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    trip_id BIGINT REFERENCES trip(id) NOT NULL,
    name TEXT NOT NULL,
    body TEXT NOT NULL,
    rating INT NOT NULL CHECK(rating >= 1 AND rating <=5),
);
drop table if exists posts
drop table if exists users

create table users (
user_id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text
);
create table posts (
post_id serial primary key,
title varchar(45),
img text,
content text,
author_id int references users(user_id)
);

insert into users (username, password, profile_pic)
values ('jimbob', 'password', 'https://robohash.org/jimbob'),
('hopper', 'password1', 'https://robohash.org/hopper'),
('colonel', 'mustard', 'https://robohash.org/colonel');

insert into posts (title, img, content, author_id)
values ('Truck', 'https://media.npr.org/assets/img/2016/09/02/gettyimages-142015528_custom-58a425ecdc558190163d3e90844dc16411c65d37-s800-c85.jpg', 'That''s my truck.', 1),
('Sir HopsALot', 'https://www.luvncare.net/wp-content/uploads/2019/04/lnc-rabbit-vet-care.jpg', 'I knighted this rabbit for fun.', 2),
('In the Conservatory', 'https://vasemarket-c3e2.kxcdn.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/-/3-1509gd_1/pedestal-metal-candlestick-holder-gold-h-16-11.jpg', 'With a candelstick. But it wasn''t me of course', 3);
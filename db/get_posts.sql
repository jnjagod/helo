select post_id, title, user_id, username, profile_pic 
from posts p
join users u 
on u.user_id = p.author_id;
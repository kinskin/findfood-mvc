CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password TEXT,
    profile_name TEXT,
    profile_image TEXT
);

INSERT INTO users(email, password, profile_name, profile_image) VALUES('asshikin@ga.com', '123456', 'kinskin','https://scontent.fsin6-1.fna.fbcdn.net/v/t1.0-9/14224688_1142368785833204_1726046074346977991_n.jpg?_nc_cat=102&_nc_oc=AQl7Z28mI--A8GRQX_2pxLCr8kFgZdfbJ6tbURrs6xI2oLjVLiIRi-j_ca4oQRFF0k8&_nc_ht=scontent.fsin6-1.fna&oh=d6065e77eb87c0e1728bfc325ea2eb0b&oe=5DDEEEE9');
INSERT INTO users(email, password, profile_name, profile_image) VALUES('zqlimy@gmail.com', '123456', 'quackkk', 'https://scontent.fsin6-1.fna.fbcdn.net/v/t31.0-8/1622440_10152099155799545_1377750887_o.jpg?_nc_cat=110&_nc_oc=AQnHilCwUSEy46Rr65vT5spQE-MzvmgLfqM0wfhAJRzGRA9HU1NRBnjy5ASK86AVYas&_nc_ht=scontent.fsin6-1.fna&oh=6aa3ccff18aadef6131908e65a0238b3&oe=5DE66491');
INSERT INTO users(email, password, profile_name, profile_image) VALUES('joelquah@live.com', '123456', 'limpeh', 'https://scontent.fsin6-1.fna.fbcdn.net/v/t1.0-9/39091663_10156897759854467_7525611562560651264_n.jpg?_nc_cat=110&_nc_oc=AQnlndBBm4j_wkvKvWbO7Y7DYyOGldkv4CmTo1UiLS-uKMGfgidGQzFOnj41huTd254&_nc_ht=scontent.fsin6-1.fna&oh=7970db743b2d857c392d955975792f72&oe=5DD4D6D0');
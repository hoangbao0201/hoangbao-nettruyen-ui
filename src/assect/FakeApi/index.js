import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowsRotate,
    faCaretDown,
    faCloudUpload,
    faEye,
    faHouse,
    faSignal,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

import imgComics from '~/assect/images/imgComics';

const listComicFol = [
    {
        id: 1,
        name: 'Võ Luyện Đỉnh Phong',
        chapter: '2265',
        view: '29.280.039',
        img: 'https://st.nettruyenco.com/data/comics/32/vo-luyen-dinh-phong.jpg',
        href: '/',
    },
    {
        id: 2,
        name: 'Ta Có Một Sơn Trại',
        chapter: '343',
        view: '7.122.760',
        img: 'https://st.nettruyenco.com/data/comics/217/ta-co-mot-son-trai.jpg',
        href: '/',
        viewNext: '74',
    },
    {
        id: 3,
        name: 'Đại Vương Tha Mạng',
        chapter: '495',
        view: '6.138.564',
        img: 'https://st.nettruyenco.com/data/comics/131/dai-vuong-tha-mang.jpg',
        href: '/',
    },
    {
        id: 4,
        name: 'Trọng Sinh Đô Thị Tu Tiên',
        chapter: '767',
        view: '5.942.081',
        img: 'https://st.nettruyenco.com/data/comics/213/trong-sinh-do-thi-tu-tien.jpg',
        href: '/',
    },
    {
        id: 5,
        name: 'Tu La Võ Thần',
        chapter: '568',
        view: '5.618.704',
        img: 'https://st.nettruyenco.com/data/comics/43/tu-la-vo-than.jpg',
        href: '/',
    },
    {
        id: 6,
        name: 'Toàn Chức Pháp Sư',
        chapter: '568',
        view: '5.284.614',
        img: 'https://st.nettruyenco.com/data/comics/127/toan-chuc-phap-su.jpg',
        href: '/',
    },
];

// console.log(imgComics.img1);

const Comics = [
    {
        name: 'demo',
        img: imgComics.img1,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Hoa Sơn Tái Xuất',
        img: imgComics.img2,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Streamer Pháp Sư',
        img: imgComics.img3,
        link: '/truyen-tranh/streamer-phap-su',
        chapterNew: '289',
        timeNew: '3 giờ trước',
        view: '58.244.262',
        heart: '753.432',
        comment: '54.786',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Tu Tiên Đại Chiến Siêu Năng Lực',
        img: imgComics.img4,
        link: '/truyen-tranh/tu-tien-gia-dai-chien-sieu-nang-luc',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Là Tà Đế',
        img: imgComics.img5,
        link: '/truyen-tranh/ta-la-ta-de',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Trời Sinh Đã Là Nhân Vật Phản Diện',
        img: imgComics.img6,
        link: '/truyen-tranh/ta-troi-sinh-da-la-nhan-vat-phan-dien',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'demo',
        img: imgComics.img1,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Hoa Sơn Tái Xuất',
        img: imgComics.img2,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Streamer Pháp Sư',
        img: imgComics.img3,
        link: '/truyen-tranh/streamer-phap-su',
        chapterNew: '289',
        timeNew: '3 giờ trước',
        view: '58.244.262',
        heart: '753.432',
        comment: '54.786',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Tu Tiên Đại Chiến Siêu Năng Lực',
        img: imgComics.img4,
        link: '/truyen-tranh/tu-tien-gia-dai-chien-sieu-nang-luc',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Là Tà Đế',
        img: imgComics.img5,
        link: '/truyen-tranh/ta-la-ta-de',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Trời Sinh Đã Là Nhân Vật Phản Diện',
        img: imgComics.img6,
        link: '/truyen-tranh/ta-troi-sinh-da-la-nhan-vat-phan-dien',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'demo',
        img: imgComics.img1,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Hoa Sơn Tái Xuất',
        img: imgComics.img2,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Streamer Pháp Sư',
        img: imgComics.img3,
        link: '/truyen-tranh/streamer-phap-su',
        chapterNew: '289',
        timeNew: '3 giờ trước',
        view: '58.244.262',
        heart: '753.432',
        comment: '54.786',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Tu Tiên Đại Chiến Siêu Năng Lực',
        img: imgComics.img4,
        link: '/truyen-tranh/tu-tien-gia-dai-chien-sieu-nang-luc',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Là Tà Đế',
        img: imgComics.img5,
        link: '/truyen-tranh/ta-la-ta-de',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Trời Sinh Đã Là Nhân Vật Phản Diện',
        img: imgComics.img6,
        link: '/truyen-tranh/ta-troi-sinh-da-la-nhan-vat-phan-dien',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'demo',
        img: imgComics.img1,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Hoa Sơn Tái Xuất',
        img: imgComics.img2,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Streamer Pháp Sư',
        img: imgComics.img3,
        link: '/truyen-tranh/streamer-phap-su',
        chapterNew: '289',
        timeNew: '3 giờ trước',
        view: '58.244.262',
        heart: '753.432',
        comment: '54.786',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Tu Tiên Đại Chiến Siêu Năng Lực',
        img: imgComics.img4,
        link: '/truyen-tranh/tu-tien-gia-dai-chien-sieu-nang-luc',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Là Tà Đế',
        img: imgComics.img5,
        link: '/truyen-tranh/ta-la-ta-de',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Trời Sinh Đã Là Nhân Vật Phản Diện',
        img: imgComics.img6,
        link: '/truyen-tranh/ta-troi-sinh-da-la-nhan-vat-phan-dien',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'demo',
        img: imgComics.img1,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Hoa Sơn Tái Xuất',
        img: imgComics.img2,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Streamer Pháp Sư',
        img: imgComics.img3,
        link: '/truyen-tranh/streamer-phap-su',
        chapterNew: '289',
        timeNew: '3 giờ trước',
        view: '58.244.262',
        heart: '753.432',
        comment: '54.786',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Tu Tiên Đại Chiến Siêu Năng Lực',
        img: imgComics.img4,
        link: '/truyen-tranh/tu-tien-gia-dai-chien-sieu-nang-luc',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Là Tà Đế',
        img: imgComics.img5,
        link: '/truyen-tranh/ta-la-ta-de',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Trời Sinh Đã Là Nhân Vật Phản Diện',
        img: imgComics.img6,
        link: '/truyen-tranh/ta-troi-sinh-da-la-nhan-vat-phan-dien',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'demo',
        img: imgComics.img1,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Hoa Sơn Tái Xuất',
        img: imgComics.img2,
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Streamer Pháp Sư',
        img: imgComics.img3,
        link: '/truyen-tranh/streamer-phap-su',
        chapterNew: '289',
        timeNew: '3 giờ trước',
        view: '58.244.262',
        heart: '753.432',
        comment: '54.786',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Tu Tiên Đại Chiến Siêu Năng Lực',
        img: imgComics.img4,
        link: '/truyen-tranh/tu-tien-gia-dai-chien-sieu-nang-luc',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Là Tà Đế',
        img: imgComics.img5,
        link: '/truyen-tranh/ta-la-ta-de',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
    {
        name: 'Ta Trời Sinh Đã Là Nhân Vật Phản Diện',
        img: imgComics.img6,
        link: '/truyen-tranh/ta-troi-sinh-da-la-nhan-vat-phan-dien',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
        hot: 'hot',
        timeNewUpdate: '08:44 04/06/2022',
    },
];

const ListNavbar = [
    {
        id: 1,
        name: 'Home',
        href: '/',
        fontIcon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
        id: 2,
        name: 'Hot',
        title: 'hot ',
        href: '/hot',
    },
    {
        id: 3,
        name: 'Follow',
        title: 'theo dõi',
        href: '/theo-doi',
    },
    {
        id: 4,
        name: 'History',
        title: 'lịch sử',
        href: '/lich-su',
    },
    {
        id: 5,
        name: 'Category',
        title: 'thể loại ',
        href: '/tim-truyen-nang-cao',
        fontIcon: <FontAwesomeIcon icon={faCaretDown} />,
        list: [
            [
                {
                    title: 'Tất cả',
                    href: '/tim-truyen/tat-ca',
                    dataTitle: 'Tất cả thể loại truyện tranh',
                },
                {
                    title: 'Action',
                    href: '/tim-truyen/action',
                    dataTitle: 'Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn, với diễn biến nhanh',
                },
                {
                    title: 'Adult',
                    href: '/tim-truyen/adult',
                    dataTitle: 'Thể loại Adult đề cập đến vấn đề nhạy cảm, chỉ dành cho tuổi 17+',
                },
                {
                    title: 'Adventure',
                    href: '/tim-truyen/adventure',
                    dataTitle: 'Thể loại phiêu lưu, mạo hiểm, thường là hành trình của các nhân vật',
                },
                {
                    title: 'Anime',
                    href: '/tim-truyen/anime',
                    dataTitle: 'Truyện đã được chuyển thể thành film Anime',
                },
                {
                    title: 'Chuyển sinh',
                    href: '/tim-truyen/chuyen-sinh',
                    dataTitle:
                        'Thể loại này là những câu chuyện về người ở một thế giới này xuyên đến một thế giới khác, có thể là thế giới mang phong cách trung cổ với kiếm sĩ và ma thuật, hay thế giới trong game, hoặc có thể là bạn chết ở nơi này và được chuyển sinh đến nơi khác',
                },
                {
                    title: 'Comedy',
                    href: '/tim-truyen/comedy',
                    dataTitle:
                        'Thể loại có nội dung trong sáng và cảm động, thường có các tình tiết gây cười, các xung đột nhẹ nhàng',
                },
                {
                    title: 'Comic',
                    href: '/tim-truyen/comic',
                    dataTitle: 'Truyện tranh Châu Âu và Châu Mĩ',
                },
                {
                    title: 'Cooking',
                    href: '/tim-truyen/cooking',
                    dataTitle: 'Thể loại có nội dung về nấu ăn, ẩm thực',
                },
                {
                    title: 'Cổ Đại',
                    href: '/tim-truyen/co-dai',
                    dataTitle: 'Truyện có nội dung xảy ra ở thời cổ đại phong kiến.',
                },
                {
                    title: 'Doujinshi',
                    href: '/tim-truyen/doujinshi',
                    dataTitle:
                        'Thể loại truyện phóng tác do fan hay có thể cả những Mangaka khác với tác giả truyện gốc. Tác giả vẽ Doujinshi thường dựa trên những nhân vật gốc để viết ra những câu chuyện theo sở thích của mình',
                },
                {
                    title: 'Drama',
                    href: '/tim-truyen/drama',
                    dataTitle:
                        'Thể loại mang đến cho người xem những cảm xúc khác nhau: buồn bã, căng thẳng thậm chí là bi phẫn',
                },
                {
                    title: 'Đam Mỹ',
                    href: '/tim-truyen/dam-my',
                    dataTitle: 'Truyện tình cảm giữa nam và nam.',
                },
            ],
            [
                {
                    title: 'Ecchi',
                    href: '/tim-truyen/ecchi',
                    dataTitle: 'Thường có những tình huống nhạy cảm nhằm lôi cuốn người xem',
                },
                {
                    title: 'Fantasy',
                    href: '/tim-truyen/fantasy',
                    dataTitle:
                        'Thể loại xuất phát từ trí tưởng tượng phong phú, từ pháp thuật đến thế giới trong mơ thậm chí là những câu chuyện thần tiên',
                },
                {
                    title: 'Gender Bender',
                    href: '/tim-truyen/gender-bender',
                    dataTitle:
                        'Là một thể loại trong đó giới tính của nhân vật bị lẫn lộn: nam hoá thành nữ, nữ hóa thành nam...',
                },
                {
                    title: 'Harem',
                    href: '/tim-truyen/harem',
                    dataTitle:
                        'Thể loại truyện tình cảm, lãng mạn mà trong đó, nhiều nhân vật nữ thích một nam nhân vật chính',
                },
                {
                    title: 'Historical',
                    href: '/tim-truyen/historical',
                    dataTitle: 'Thể loại có liên quan đến thời xa xưa',
                },
                {
                    title: 'Horror',
                    href: '/tim-truyen/horror',
                    dataTitle:
                        'Horror là: rùng rợn, nghe cái tên là bạn đã hiểu thể loại này có nội dung thế nào. Nó làm cho bạn kinh hãi, khiếp sợ, ghê tởm, run rẩy, có thể gây sock - một thể loại không dành cho người yếu tim',
                },
                {
                    title: 'Josei',
                    href: '/tim-truyen/josei',
                    dataTitle:
                        'Thể loại của manga hay anime được sáng tác chủ yếu bởi phụ nữ cho những độc giả nữ từ 18 đến 30. Josei manga có thể miêu tả những lãng mạn thực tế , nhưng trái ngược với hầu hết các kiểu lãng mạn lí tưởng của Shoujo manga với cốt truyện rõ ràng, chín chắn',
                },
                {
                    title: 'Live action',
                    href: '/tim-truyen/live-action',
                    dataTitle: 'Truyện đã được chuyển thể thành phim',
                },
                {
                    title: 'Manga',
                    href: '/tim-truyen/manga',
                    dataTitle: 'Truyện tranh của Nhật Bản',
                },
                {
                    title: 'Mahua',
                    href: '/tim-truyen/mahua',
                    dataTitle: 'Truyện tranh của Trung Quốc',
                },
                {
                    title: 'Manhwa',
                    href: '/tim-truyen/manhwa',
                    dataTitle: 'Truyện tranh Hàn Quốc, đọc từ trái sang phải',
                },
                {
                    title: 'Martial Arts',
                    href: '/tim-truyen/martial-arts',
                    dataTitle:
                        'Giống với tên gọi, bất cứ gì liên quan đến võ thuật trong truyện từ các trận đánh nhau, tự vệ đến các môn võ thuật như akido, karate, judo hay taekwondo, kendo, các cách né tránh',
                },
                {
                    title: 'Mature',
                    href: '/tim-truyen/mature',
                    dataTitle:
                        'Thể loại dành cho lứa tuổi 17+ bao gồm các pha bạo lực, máu me, chém giết, tình dục ở mức độ vừa',
                },
            ],
            [
                {
                    title: 'Mecha',
                    href: '/tim-truyen/mecha',
                    dataTitle:
                        'Mecha, còn được biết đến dưới cái tên meka hay mechs, là thể loại nói tới những cỗ máy biết đi (thường là do phi công cầm lái)',
                },
                {
                    title: 'Mystery',
                    href: '/tim-truyen/mystery',
                    dataTitle:
                        'Thể loại thường xuất hiện những điều bí ấn không thể lí giải được và sau đó là những nỗ lực của nhân vật chính nhằm tìm ra câu trả lời thỏa đáng',
                },
                {
                    title: 'Ngôn Tình',
                    href: '/tim-truyen/ngon-tinh',
                    dataTitle:
                        'Truyện thuộc kiểu lãng mạn, kể về những sự kiện vui buồn trong tình yêu của nhân vật chính.',
                },
                {
                    title: 'One shot',
                    href: '/tim-truyen/one-shot',
                    dataTitle: 'Những truyện ngắn, thường là 1 chapter',
                },
                {
                    title: 'Psychologial',
                    href: '/tim-truyen/psychologial',
                    dataTitle:
                        'Thể loại liên quan đến những vấn đề về tâm lý của nhân vật ( tâm thần bất ổn, điên cuồng ...)',
                },
                {
                    title: 'Romance',
                    href: '/tim-truyen/romance',
                    dataTitle:
                        'Thường là những câu chuyện về tình yêu, tình cảm lãng mạn. Ớ đây chúng ta sẽ lấy ví dụ như tình yêu giữa một người con trai và con gái, bên cạnh đó đặc điểm thể loại này là kích thích trí tưởng tượng của bạn về tình yêu',
                },
                {
                    title: 'School life',
                    href: '/tim-truyen/school-life',
                    dataTitle: 'Trong thể loại này, ngữ cảnh diễn biến câu chuyện chủ yếu ở trường học',
                },
                {
                    title: 'Sci fi',
                    href: '/tim-truyen/sci-fi',
                    dataTitle:
                        'Bao gồm những chuyện khoa học viễn tưởng, đa phần chúng xoay quanh nhiều hiện tượng mà liên quan tới khoa học, công nghệ, tuy vậy thường thì những câu chuyện đó không gắn bó chặt chẽ với các thành tựu khoa học hiện thời, mà là do con người tưởng tượng ra',
                },
                {
                    title: 'Seinen',
                    href: '/tim-truyen/seinen',
                    dataTitle:
                        'Thể loại của manga thường nhằm vào những đối tượng nam 18 đến 30 tuổi, nhưng người xem có thể lớn tuổi hơn, với một vài bộ truyện nhắm đến các doanh nhân nam quá 40. Thể loại này có nhiều phong cách riêng biệt , nhưng thể loại này có những nét riêng biệt, thường được phân vào những phong cách nghệ thuật rộng hơn và phong phú hơn về chủ đề, có các loại từ mới mẻ tiên tiến đến khiêu dâm',
                },
                {
                    title: 'Shoujo',
                    href: '/tim-truyen/shoujo',
                    dataTitle:
                        'Đối tượng hướng tới của thể loại này là phái nữ. Nội dung của những bộ manga này thường liên quan đến tình cảm lãng mạn, chú trọng đầu tư cho nhân vật (tính cách,...)',
                },
                {
                    title: 'Shoujo Ai',
                    href: '/tim-truyen/houjo-ai',
                    dataTitle:
                        'Thể loại quan hệ hoặc liên quan tới đồng tính nữ, thể hiện trong các mối quan hệ trên mức bình thường giữa các nhân vật nữ trong các manga, anime',
                },
                {
                    title: 'Shounen',
                    href: '/tim-truyen/shounen',
                    dataTitle:
                        'Đối tượng hướng tới của thể loại này là phái nam. Nội dung của những bộ manga này thường liên quan đến đánh nhau và/hoặc bạo lực (ở mức bình thường, không thái quá)',
                },
                {
                    title: 'Shounen Ai',
                    href: '/tim-truyen/shounen-ai',
                    dataTitle:
                        'Thể loại có nội dung về tình yêu giữa những chàng trai trẻ, mang tính chất lãng mạn nhưng ko đề cập đến quan hệ tình dục',
                },
            ],
            [
                {
                    title: 'Slice of Life',
                    href: '/tim-truyen/slice-of-life',
                    dataTitle: 'Nói về cuộc sống đời thường',
                },
                {
                    title: 'Smut',
                    href: '/tim-truyen/smut',
                    dataTitle: 'Những truyện có nội dung hơi nhạy cảm, đặc biệt là liên quan đến tình dục',
                },
                {
                    title: 'Soft Yaoi',
                    href: '/tim-truyen/soft-yaoi',
                    dataTitle: 'Boy x Boy. Nặng hơn Shounen Ai tí.',
                },
                {
                    title: 'Soft Yuri',
                    href: '/tim-truyen/soft-yuri',
                    dataTitle: 'Girl x Girl. Nặng hơn Shoujo Ai tí',
                },
                {
                    title: 'Sports',
                    href: '/tim-truyen/sports',
                    dataTitle:
                        'Đúng như tên gọi, những môn thể thao như bóng đá, bóng chày, bóng chuyền, đua xe, cầu lông,... là một phần của thể loại này',
                },
                {
                    title: 'Supernatural',
                    href: '/tim-truyen/supernatural',
                    dataTitle:
                        'Thể hiện những sức mạnh đáng kinh ngạc và không thể giải thích được, chúng thường đi kèm với những sự kiện trái ngược hoặc thách thức với những định luật vật lý',
                },
                {
                    title: 'Thiếu Nhi',
                    href: '/tim-truyen/thieu-nhi',
                    dataTitle: 'Truyện tranh dành cho lứa tuổi thiếu nhi',
                },
                {
                    title: 'Tragedy',
                    href: '/tim-truyen/tragedy',
                    dataTitle:
                        'Thể loại chứa đựng những sự kiện mà dẫn đến kết cục là những mất mát hay sự rủi ro to lớn',
                },
                {
                    title: 'Trinh Thám',
                    href: '/tim-truyen/trinh-tham',
                    dataTitle: 'Các truyện có nội dung về các vụ án, các thám tử cảnh sát điều tra...',
                },
                {
                    title: 'Truyện Scan',
                    href: '/tim-truyen/truyen-scan',
                    dataTitle: 'Các truyện đã phát hành tại VN được scan đăng online',
                },
                {
                    title: 'Truyện Màu',
                    href: '/tim-truyen/truyen-mau',
                    dataTitle: 'Tổng hợp truyện tranh màu, rõ, đẹp',
                },
                {
                    title: 'Webtoon',
                    href: '/tim-truyen/webtoon',
                    dataTitle:
                        'Là truyện tranh được đăng dài kỳ trên internet của Hàn Quốc chứ không xuất bản theo cách thông thường',
                },
                {
                    title: 'Xuyên Không',
                    href: '/tim-truyen/xuyen-khong',
                    dataTitle:
                        'Xuyên Không, Xuyên Việt là thể loại nhân vật chính vì một lý do nào đó mà bị đưa đến sinh sống ở một không gian hay một khoảng thời gian khác. Nhân vật chính có thể trực tiếp xuyên qua bằng thân xác mình hoặc sống lại bằng thân xác người khác.',
                },
            ],
        ],
    },
    {
        id: 6,
        name: 'Rank',
        title: 'xếp hạng ',
        href: '#',
        fontIcon: <FontAwesomeIcon icon={faCaretDown} />,
        list: [
            [
                {
                    title: ' Top All',
                    icon: <FontAwesomeIcon icon={faEye} />,
                    more: 'nguyenhoangbao',
                    href: '/top-all',
                },
                {
                    title: ' Top tháng',
                    icon: <FontAwesomeIcon icon={faEye} />,
                    href: '/top-thang',
                },
                {
                    title: ' Top Tuần',
                    icon: <FontAwesomeIcon icon={faEye} />,
                    href: '/top-tuan',
                },
                {
                    title: ' Top ngày',
                    icon: <FontAwesomeIcon icon={faEye} />,
                    href: '/top-ngay',
                },
            ],
            [
                {
                    title: ' Truyện Full',
                    icon: <FontAwesomeIcon icon={faSignal} />,
                    href: '/truyen-full',
                },
                {
                    title: ' Yêu thích',
                    icon: <FontAwesomeIcon icon={faThumbsUp} />,
                    href: '/yeu-thich',
                },
                {
                    title: ' Mới cập nhật',
                    icon: <FontAwesomeIcon icon={faArrowsRotate} />,
                    href: '/moi-cap-nhat',
                },
                {
                    title: ' Truyện mới',
                    icon: <FontAwesomeIcon icon={faCloudUpload} />,
                    href: '/truyen-moi',
                },
            ],
        ],
    },
    {
        id: 7,
        name: 'SearchComic',
        title: 'tìm truyện',
        href: '/tim-truyen-nang-cao',
    },
    {
        id: 8,
        name: 'Girl',
        title: 'con gái',
        href: '/con-gai',
    },
    {
        id: 9,
        name: 'Boy',
        title: 'con trai',
        href: '/con-trai',
    },
    {
        id: 10,
        name: 'DownloadApp',
        title: 'tải app',
        href: '/tai-app',
    },
    {
        id: 11,
        name: 'Group',
        title: 'group',
        href: 'https://www.facebook.com/groups/nettruyenonline/',
    },
];

const listSlider = [
    {
        name: 'Hoa Sơn Tái Xuất',
        img: 'http://st.nettruyenco.com/data/comics/11/hoa-son-tai-xuat.jpg',
        link: '/truyen-tranh/hoa-son-tai-xuat',
        chapterNew: '145',
        timeNew: '2 phút trước',
        view: '14.004.789',
        heart: '5036',
        comment: '6226',
    },
    {
        name: 'Streamer Pháp Sư',
        img: 'http://st.nettruyenco.com/data/comics/39/streamer-phap-su.jpg',
        link: '/truyen-tranh/streamer-phap-su',
        chapterNew: '289',
        timeNew: '3 giờ trước',
        view: '58.244.262',
        heart: '753.432',
        comment: '54.786',
    },
    {
        name: 'Tu Tiên Đại Chiến Siêu Năng Lực',
        img: 'http://st.nettruyenco.com/data/comics/212/tu-tien-gia-dai-chien-sieu-nang-luc.jpg',
        link: '/truyen-tranh/tu-tien-gia-dai-chien-sieu-nang-luc',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
    },
    {
        name: 'Ta Là Tà Đế',
        img: 'http://st.nettruyenco.com/data/comics/161/ta-la-ta-de.jpg',
        link: '/truyen-tranh/ta-la-ta-de',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
    },
    {
        name: 'Ta Trời Sinh Đã Là Nhân Vật Phản Diện',
        img: 'http://st.nettruyenco.com/data/comics/235/ta-troi-sinh-da-la-nhan-vat-phan-dien.jpg',
        link: '/truyen-tranh/ta-troi-sinh-da-la-nhan-vat-phan-dien',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
    },
    {
        name: 'Chư Giới Tận Thế Online',
        img: 'http://st.nettruyenco.com/data/comics/78/chu-gioi-tan-the-online.jpg',
        link: '/truyen-tranh/chu-gioi-tan-the-online',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
    },
    {
        name: 'Đại Quản Gia Là Ma Hoàng',
        img: 'http://st.nettruyenco.com/data/comics/188/dai-quan-gia-la-ma-hoang.jpg',
        link: '/truyen-tranh/dai-quan-gia-la-ma-hoang',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
    },
    {
        name: 'Bắc Kiếm Giang Hồ',
        img: 'http://st.nettruyenco.com/data/comics/47/bac-kiem-giang-ho.jpg',
        link: '/truyen-tranh/bac-kiem-giang-ho',
        chapterNew: '268',
        timeNew: '5 giờ trước',
        view: '600.454.345',
        heart: '90.432',
        comment: '763.432',
    },
];

const listTopMonth = [
    {
        id: 1,
        name: 'Võ Luyện Đỉnh Phong',
        chapter: '2265',
        view: '29.280.039',
        img: 'https://st.nettruyenco.com/data/comics/32/vo-luyen-dinh-phong.jpg',
        href: '',
    },
    {
        id: 2,
        name: 'Ta Có Một Sơn Trại',
        chapter: '343',
        view: '7.122.760',
        img: 'https://st.nettruyenco.com/data/comics/217/ta-co-mot-son-trai.jpg',
        href: '',
    },
    {
        id: 3,
        name: 'Đại Vương Tha Mạng',
        chapter: '495',
        view: '6.138.564',
        img: 'https://st.nettruyenco.com/data/comics/131/dai-vuong-tha-mang.jpg',
        href: '',
    },
    {
        id: 4,
        name: 'Trọng Sinh Đô Thị Tu Tiên',
        chapter: '767',
        view: '5.942.081',
        img: 'https://st.nettruyenco.com/data/comics/213/trong-sinh-do-thi-tu-tien.jpg',
        href: '',
    },
    {
        id: 5,
        name: 'Tu La Võ Thần',
        chapter: '568',
        view: '5.618.704',
        img: 'https://st.nettruyenco.com/data/comics/43/tu-la-vo-than.jpg',
        href: '',
    },
    {
        id: 6,
        name: 'Toàn Chức Pháp Sư',
        chapter: '568',
        view: '5.284.614',
        img: 'https://st.nettruyenco.com/data/comics/127/toan-chuc-phap-su.jpg',
        href: '',
    },
    {
        id: 7,
        name: 'Trên Người Ta Có Một Con Rồng',
        chapter: '519',
        view: '5.223.133',
        img: 'https://st.nettruyenco.com/data/comics/172/tren-nguoi-ta-co-mot-con-rong.jpg',
        href: '',
    },
];

const listTopUser = [
    {
        id: 1,
        name: 'Thuỷ Kê Tử - Bần Nông Tông',
        img: 'https://st.nettruyenco.com/data/sites/1/useravatars/447259.jpg?v=3993',
        rank: 780,
    },
    {
        id: 2,
        name: 'ArchLich -Akatsuki',
        img: 'https://st.nettruyenco.com/data/sites/1/useravatars/377137.jpg?v=7668',
        rank: 519,
    },
    {
        id: 3,
        name: 'Hoàng Bảo',
        img: 'https://st.nettruyenco.com/data/sites/1/useravatars/439528.jpg?v=2737',
        rank: 515,
    },
    {
        id: 4,
        name: '[悲鳴嶼 行冥 ]',
        img: 'https://st.nettruyenco.com/data/sites/1/useravatars/705655.jpg?v=6032',
        rank: 510,
    },
    {
        id: 5,
        name: 'Ta đọc lướt',
        img: 'https://st.nettruyenco.com/data/sites/1/useravatars/720165.jpg?v=3803',
        rank: 503,
    },
];

const listPages = [
    {
        id: 1,
        href: '',
        indexPage: 1,
    },
    {
        id: 2,
        href: '',
        indexPage: 2,
    },
    {
        id: 3,
        href: '',
        indexPage: 3,
    },
    {
        id: 4,
        href: '',
        indexPage: 4,
    },
    {
        id: 5,
        href: '',
        indexPage: 5,
    },
    {
        id: 6,
        href: '',
        indexPage: 6,
    },
    {
        id: 7,
        href: '',
        indexPage: 7,
    },
    {
        id: 8,
        href: '',
        indexPage: 8,
    },
    {
        id: 9,
        href: '',
        indexPage: 9,
    },
];

const titlePaths = {
    pathsHot: [
        {
            title: 'Hot',
            link: '/hot',
        },
    ],
    pathsFollower: [
        {
            title: 'Theo dõi',
            link: '/theo-doi',
        },
    ],
    pathsHistory: [
        {
            title: 'Lịch sử',
            link: '/lich-su',
        },
    ],
    pathsCategory: [
        {
            title: 'Thể loại',
            link: '/the-loai',
        },
    ],
    pathsFindComics: [
        {
            title: 'Tìm truyện',
            link: '/tim-truyen-nang-cao',
        },
    ],
    pathsGirl: [
        {
            title: 'Con gái',
            link: '/con-gai',
        },
    ],
    pathsBoy: [
        {
            title: 'Con trai',
            link: '/con-trai',
        },
    ],
    pathsDownloadApp: [
        {
            title: 'Tải App',
            link: '/tai-app',
        },
    ],
    pathsLogin: [
        {
            title: 'Đăng nhập',
            link: '/login',
        },
    ],
    pathsRegister: [
        {
            title: 'Đăng kí',
            link: '/register',
        },
    ],
};

const listCheckBox = [
    {
        title: 'Tất cả',
        href: '/tim-truyen/tat-ca',
        dataTitle: 'Tất cả thể loại truyện tranh',
    },
    {
        title: 'Action',
        href: '/tim-truyen/action',
        dataTitle: 'Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn, với diễn biến nhanh',
    },
    {
        title: 'Adult',
        href: '/tim-truyen/adult',
        dataTitle: 'Thể loại Adult đề cập đến vấn đề nhạy cảm, chỉ dành cho tuổi 17+',
    },
    {
        title: 'Adventure',
        href: '/tim-truyen/adventure',
        dataTitle: 'Thể loại phiêu lưu, mạo hiểm, thường là hành trình của các nhân vật',
    },
    {
        title: 'Anime',
        href: '/tim-truyen/anime',
        dataTitle: 'Truyện đã được chuyển thể thành film Anime',
    },
    {
        title: 'Chuyển sinh',
        href: '/tim-truyen/chuyen-sinh',
        dataTitle:
            'Thể loại này là những câu chuyện về người ở một thế giới này xuyên đến một thế giới khác, có thể là thế giới mang phong cách trung cổ với kiếm sĩ và ma thuật, hay thế giới trong game, hoặc có thể là bạn chết ở nơi này và được chuyển sinh đến nơi khác',
    },
    {
        title: 'Comedy',
        href: '/tim-truyen/comedy',
        dataTitle:
            'Thể loại có nội dung trong sáng và cảm động, thường có các tình tiết gây cười, các xung đột nhẹ nhàng',
    },
    {
        title: 'Comic',
        href: '/tim-truyen/comic',
        dataTitle: 'Truyện tranh Châu Âu và Châu Mĩ',
    },
    {
        title: 'Cooking',
        href: '/tim-truyen/cooking',
        dataTitle: 'Thể loại có nội dung về nấu ăn, ẩm thực',
    },
    {
        title: 'Cổ Đại',
        href: '/tim-truyen/co-dai',
        dataTitle: 'Truyện có nội dung xảy ra ở thời cổ đại phong kiến.',
    },
    {
        title: 'Doujinshi',
        href: '/tim-truyen/doujinshi',
        dataTitle:
            'Thể loại truyện phóng tác do fan hay có thể cả những Mangaka khác với tác giả truyện gốc. Tác giả vẽ Doujinshi thường dựa trên những nhân vật gốc để viết ra những câu chuyện theo sở thích của mình',
    },
    {
        title: 'Drama',
        href: '/tim-truyen/drama',
        dataTitle: 'Thể loại mang đến cho người xem những cảm xúc khác nhau: buồn bã, căng thẳng thậm chí là bi phẫn',
    },
    {
        title: 'Đam Mỹ',
        href: '/tim-truyen/dam-my',
        dataTitle: 'Truyện tình cảm giữa nam và nam.',
    },
    {
        title: 'Ecchi',
        href: '/tim-truyen/ecchi',
        dataTitle: 'Thường có những tình huống nhạy cảm nhằm lôi cuốn người xem',
    },
    {
        title: 'Fantasy',
        href: '/tim-truyen/fantasy',
        dataTitle:
            'Thể loại xuất phát từ trí tưởng tượng phong phú, từ pháp thuật đến thế giới trong mơ thậm chí là những câu chuyện thần tiên',
    },
    {
        title: 'Gender Bender',
        href: '/tim-truyen/gender-bender',
        dataTitle: 'Là một thể loại trong đó giới tính của nhân vật bị lẫn lộn: nam hoá thành nữ, nữ hóa thành nam...',
    },
    {
        title: 'Harem',
        href: '/tim-truyen/harem',
        dataTitle: 'Thể loại truyện tình cảm, lãng mạn mà trong đó, nhiều nhân vật nữ thích một nam nhân vật chính',
    },
    {
        title: 'Historical',
        href: '/tim-truyen/historical',
        dataTitle: 'Thể loại có liên quan đến thời xa xưa',
    },
    {
        title: 'Horror',
        href: '/tim-truyen/horror',
        dataTitle:
            'Horror là: rùng rợn, nghe cái tên là bạn đã hiểu thể loại này có nội dung thế nào. Nó làm cho bạn kinh hãi, khiếp sợ, ghê tởm, run rẩy, có thể gây sock - một thể loại không dành cho người yếu tim',
    },
    {
        title: 'Josei',
        href: '/tim-truyen/josei',
        dataTitle:
            'Thể loại của manga hay anime được sáng tác chủ yếu bởi phụ nữ cho những độc giả nữ từ 18 đến 30. Josei manga có thể miêu tả những lãng mạn thực tế , nhưng trái ngược với hầu hết các kiểu lãng mạn lí tưởng của Shoujo manga với cốt truyện rõ ràng, chín chắn',
    },
    {
        title: 'Live action',
        href: '/tim-truyen/live-action',
        dataTitle: 'Truyện đã được chuyển thể thành phim',
    },
    {
        title: 'Manga',
        href: '/tim-truyen/manga',
        dataTitle: 'Truyện tranh của Nhật Bản',
    },
    {
        title: 'Mahua',
        href: '/tim-truyen/mahua',
        dataTitle: 'Truyện tranh của Trung Quốc',
    },
    {
        title: 'Manhwa',
        href: '/tim-truyen/manhwa',
        dataTitle: 'Truyện tranh Hàn Quốc, đọc từ trái sang phải',
    },
    {
        title: 'Martial Arts',
        href: '/tim-truyen/martial-arts',
        dataTitle:
            'Giống với tên gọi, bất cứ gì liên quan đến võ thuật trong truyện từ các trận đánh nhau, tự vệ đến các môn võ thuật như akido, karate, judo hay taekwondo, kendo, các cách né tránh',
    },
    {
        title: 'Mature',
        href: '/tim-truyen/mature',
        dataTitle: 'Thể loại dành cho lứa tuổi 17+ bao gồm các pha bạo lực, máu me, chém giết, tình dục ở mức độ vừa',
    },

    {
        title: 'Mecha',
        href: '/tim-truyen/mecha',
        dataTitle:
            'Mecha, còn được biết đến dưới cái tên meka hay mechs, là thể loại nói tới những cỗ máy biết đi (thường là do phi công cầm lái)',
    },
    {
        title: 'Mystery',
        href: '/tim-truyen/mystery',
        dataTitle:
            'Thể loại thường xuất hiện những điều bí ấn không thể lí giải được và sau đó là những nỗ lực của nhân vật chính nhằm tìm ra câu trả lời thỏa đáng',
    },
    {
        title: 'Ngôn Tình',
        href: '/tim-truyen/ngon-tinh',
        dataTitle: 'Truyện thuộc kiểu lãng mạn, kể về những sự kiện vui buồn trong tình yêu của nhân vật chính.',
    },
    {
        title: 'One shot',
        href: '/tim-truyen/one-shot',
        dataTitle: 'Những truyện ngắn, thường là 1 chapter',
    },
    {
        title: 'Psychologial',
        href: '/tim-truyen/psychologial',
        dataTitle: 'Thể loại liên quan đến những vấn đề về tâm lý của nhân vật ( tâm thần bất ổn, điên cuồng ...)',
    },
    {
        title: 'Romance',
        href: '/tim-truyen/romance',
        dataTitle:
            'Thường là những câu chuyện về tình yêu, tình cảm lãng mạn. Ớ đây chúng ta sẽ lấy ví dụ như tình yêu giữa một người con trai và con gái, bên cạnh đó đặc điểm thể loại này là kích thích trí tưởng tượng của bạn về tình yêu',
    },
    {
        title: 'School life',
        href: '/tim-truyen/school-life',
        dataTitle: 'Trong thể loại này, ngữ cảnh diễn biến câu chuyện chủ yếu ở trường học',
    },
    {
        title: 'Sci fi',
        href: '/tim-truyen/sci-fi',
        dataTitle:
            'Bao gồm những chuyện khoa học viễn tưởng, đa phần chúng xoay quanh nhiều hiện tượng mà liên quan tới khoa học, công nghệ, tuy vậy thường thì những câu chuyện đó không gắn bó chặt chẽ với các thành tựu khoa học hiện thời, mà là do con người tưởng tượng ra',
    },
    {
        title: 'Seinen',
        href: '/tim-truyen/seinen',
        dataTitle:
            'Thể loại của manga thường nhằm vào những đối tượng nam 18 đến 30 tuổi, nhưng người xem có thể lớn tuổi hơn, với một vài bộ truyện nhắm đến các doanh nhân nam quá 40. Thể loại này có nhiều phong cách riêng biệt , nhưng thể loại này có những nét riêng biệt, thường được phân vào những phong cách nghệ thuật rộng hơn và phong phú hơn về chủ đề, có các loại từ mới mẻ tiên tiến đến khiêu dâm',
    },
    {
        title: 'Shoujo',
        href: '/tim-truyen/shoujo',
        dataTitle:
            'Đối tượng hướng tới của thể loại này là phái nữ. Nội dung của những bộ manga này thường liên quan đến tình cảm lãng mạn, chú trọng đầu tư cho nhân vật (tính cách,...)',
    },
    {
        title: 'Shoujo Ai',
        href: '/tim-truyen/houjo-ai',
        dataTitle:
            'Thể loại quan hệ hoặc liên quan tới đồng tính nữ, thể hiện trong các mối quan hệ trên mức bình thường giữa các nhân vật nữ trong các manga, anime',
    },
    {
        title: 'Shounen',
        href: '/tim-truyen/shounen',
        dataTitle:
            'Đối tượng hướng tới của thể loại này là phái nam. Nội dung của những bộ manga này thường liên quan đến đánh nhau và/hoặc bạo lực (ở mức bình thường, không thái quá)',
    },
    {
        title: 'Shounen Ai',
        href: '/tim-truyen/shounen-ai',
        dataTitle:
            'Thể loại có nội dung về tình yêu giữa những chàng trai trẻ, mang tính chất lãng mạn nhưng ko đề cập đến quan hệ tình dục',
    },

    {
        title: 'Slice of Life',
        href: '/tim-truyen/slice-of-life',
        dataTitle: 'Nói về cuộc sống đời thường',
    },
    {
        title: 'Smut',
        href: '/tim-truyen/smut',
        dataTitle: 'Những truyện có nội dung hơi nhạy cảm, đặc biệt là liên quan đến tình dục',
    },
    {
        title: 'Soft Yaoi',
        href: '/tim-truyen/soft-yaoi',
        dataTitle: 'Boy x Boy. Nặng hơn Shounen Ai tí.',
    },
    {
        title: 'Soft Yuri',
        href: '/tim-truyen/soft-yuri',
        dataTitle: 'Girl x Girl. Nặng hơn Shoujo Ai tí',
    },
    {
        title: 'Sports',
        href: '/tim-truyen/sports',
        dataTitle:
            'Đúng như tên gọi, những môn thể thao như bóng đá, bóng chày, bóng chuyền, đua xe, cầu lông,... là một phần của thể loại này',
    },
    {
        title: 'Supernatural',
        href: '/tim-truyen/supernatural',
        dataTitle:
            'Thể hiện những sức mạnh đáng kinh ngạc và không thể giải thích được, chúng thường đi kèm với những sự kiện trái ngược hoặc thách thức với những định luật vật lý',
    },
    {
        title: 'Thiếu Nhi',
        href: '/tim-truyen/thieu-nhi',
        dataTitle: 'Truyện tranh dành cho lứa tuổi thiếu nhi',
    },
    {
        title: 'Tragedy',
        href: '/tim-truyen/tragedy',
        dataTitle: 'Thể loại chứa đựng những sự kiện mà dẫn đến kết cục là những mất mát hay sự rủi ro to lớn',
    },
    {
        title: 'Trinh Thám',
        href: '/tim-truyen/trinh-tham',
        dataTitle: 'Các truyện có nội dung về các vụ án, các thám tử cảnh sát điều tra...',
    },
    {
        title: 'Truyện Scan',
        href: '/tim-truyen/truyen-scan',
        dataTitle: 'Các truyện đã phát hành tại VN được scan đăng online',
    },
    {
        title: 'Truyện Màu',
        href: '/tim-truyen/truyen-mau',
        dataTitle: 'Tổng hợp truyện tranh màu, rõ, đẹp',
    },
    {
        title: 'Webtoon',
        href: '/tim-truyen/webtoon',
        dataTitle:
            'Là truyện tranh được đăng dài kỳ trên internet của Hàn Quốc chứ không xuất bản theo cách thông thường',
    },
    {
        title: 'Xuyên Không',
        href: '/tim-truyen/xuyen-khong',
        dataTitle:
            'Xuyên Không, Xuyên Việt là thể loại nhân vật chính vì một lý do nào đó mà bị đưa đến sinh sống ở một không gian hay một khoảng thời gian khác. Nhân vật chính có thể trực tiếp xuyên qua bằng thân xác mình hoặc sống lại bằng thân xác người khác.',
    },
];

export default {
    Comics,
    ListNavbar,
    listSlider,
    listComicFol,
    listTopMonth,
    listTopUser,
    listPages,
    titlePaths,
    listCheckBox,
};

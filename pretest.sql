-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Okt 2021 pada 13.23
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pretest`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(5, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(6, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(7, '2016_06_01_000004_create_oauth_clients_table', 2),
(8, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('04d0b410eec14d85d47e1504e461be07c1bc96f30a42c908e17b3e6c38fde731452fb489e57cc39b', 6, 1, 'danab@gmailm.com', '[]', 0, '2021-09-30 23:43:20', '2021-09-30 23:43:20', '2022-10-01 06:43:20'),
('058b468a3039ae2d4edc703886b35f7181ae988848a0e0a5effb72561936c5631e49c3db74001c43', 4, 1, 'wahyumulyadi10@gmail.com', '[]', 1, '2021-10-01 00:06:05', '2021-10-01 00:06:05', '2022-10-01 07:06:05'),
('0c4ef99b5a3fa0965868006a7ac3514e875d033cb7bb9282349e579d231c431ee70987c49121496a', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-10-01 00:08:45', '2021-10-01 00:08:45', '2022-10-01 07:08:45'),
('19fdd0e1d8eb020ad323d3b1dcec632bcb96bf3531d55402a63843077f2f87c0261ac1601d96e92f', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-10-01 04:09:31', '2021-10-01 04:09:31', '2022-10-01 11:09:31'),
('2343c9df6d25a9bd08fc4506c963268f3d2fcdcde020769892a751fc1e213c258533b0673a0bb6f1', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-09-30 23:57:17', '2021-09-30 23:57:17', '2022-10-01 06:57:17'),
('2d0658152d169d5898fca09c5cdc74b0919df2f6b3aa2f0a80736894516d13f7b7311e325d9a3aee', 3, 1, 'mulyadi@gmail.com', '[]', 1, '2021-10-01 00:59:53', '2021-10-01 00:59:53', '2022-10-01 07:59:53'),
('432b88e30dd7b93c46203b853df63d55227e8c2004e6f5f9e92fc2bda6647e40304fd8a3ae4b81c5', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-09-30 22:34:19', '2021-09-30 22:34:19', '2022-10-01 05:34:19'),
('52aa735fa9d25f75144388301be40c187bd7fc4120f5ef635ce1b3ea8701527a26e57ee55f5724a7', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-09-30 23:29:08', '2021-09-30 23:29:08', '2022-10-01 06:29:08'),
('5f8fbc56844660305e9b088899c9cd8d0ecca31a53c590063ef75706c2bc3c34959454bc4bf6a5d5', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-09-30 23:58:42', '2021-09-30 23:58:42', '2022-10-01 06:58:42'),
('60451017ba8d9b743430f1c0fb3c648c1439f74c93da523dafd05bc1c13e022f1c89e5683c646990', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-09-30 22:30:53', '2021-09-30 22:30:53', '2022-10-01 05:30:53'),
('60fa56adeb69a2cf8943847fbabeaf455dfb4bf648b7c1628006399447b7beed0e904cceee6bb9a6', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-10-01 00:13:17', '2021-10-01 00:13:17', '2022-10-01 07:13:17'),
('6ac1972bbf0d6b84132fe6b2fc5d8cadb627df3e771e01b3d4378ba59b758c7c393514ea1a910bd2', 4, 1, 'wahyumulyadi10@gmail.com', '[]', 0, '2021-10-01 01:10:39', '2021-10-01 01:10:39', '2022-10-01 08:10:39'),
('7092cd63a68bcd6ea42601df6fd2353e8811c819452ad882d2b9b98252bbd4800713b1a0da1617d3', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-09-30 22:39:39', '2021-09-30 22:39:39', '2022-10-01 05:39:39'),
('856e521d5e332f62aa888f5ccf67248b63e7c99f29d092a231e149ab5902ff53570f3738f0961676', 4, 1, 'wahyumulyadi10@gmail.com', '[]', 1, '2021-10-01 00:17:27', '2021-10-01 00:17:27', '2022-10-01 07:17:27'),
('b9d5866f4e80a819c1fdeb47d5cdade8d56cb1f7b7f4474def942cf7078084ef8be88dab637ae376', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-09-30 23:19:35', '2021-09-30 23:19:35', '2022-10-01 06:19:35'),
('bd392e4bbfd6e098d3d6a84f6a4f485d47f56750f453b228d8f1279ac49b99095bdbafa3ad9f7ba2', 4, 1, 'wahyumulyadi10@gmail.com', '[]', 0, '2021-09-30 23:37:52', '2021-09-30 23:37:52', '2022-10-01 06:37:52'),
('c0464a6fd8f82de8cf4308267a0d9ff6df2fef69cf1ea18ffc88084799698db8671d76e2e049ff61', 5, 1, 'mulya1di@gmail.com', '[]', 0, '2021-09-30 23:42:51', '2021-09-30 23:42:51', '2022-10-01 06:42:51'),
('c75c52b050c8054bc8156e61c5f604cd4d20ae011d6ea44e33457d9129c625a73d4c1253d13651bc', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-09-30 23:13:53', '2021-09-30 23:13:53', '2022-10-01 06:13:53'),
('c97a72fe07ebf8a7f1b1be734605b5c35c77522ceb22087026721fda9ac7c1a1f83296d24c6471b4', 4, 1, 'wahyumulyadi10@gmail.com', '[]', 0, '2021-10-01 00:14:13', '2021-10-01 00:14:13', '2022-10-01 07:14:13'),
('c986efa0e5206e4d4b1fcc0cc684b2fc0caba253253971d8303dad851c36a990cd824a0cc9462b07', 3, 1, 'mulyadi@gmail.com', '[]', 1, '2021-10-01 01:23:23', '2021-10-01 01:23:23', '2022-10-01 08:23:23'),
('d8d13670c8ebae7de8de7b780515775db5ad4ab18c6cbd1fc2764d0c875f5923453f95dff4194231', 3, 1, 'mulyadi@gmail.com', '[]', 1, '2021-10-01 01:01:54', '2021-10-01 01:01:54', '2022-10-01 08:01:54'),
('ecbd70e7e913857aed1a4f8cf090a3d6885f0fdfea938456620d3b23829e280f69cd3cdf8c8ace8e', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-09-30 22:41:29', '2021-09-30 22:41:29', '2022-10-01 05:41:29'),
('ee00bc0762e3438a51a208890bfb1ae7b257fe883f3002030bedcef374d1b04bb17586e6e64d8d49', 3, 1, 'mulyadi@gmail.com', '[]', 1, '2021-10-01 04:04:57', '2021-10-01 04:04:57', '2022-10-01 11:04:57'),
('f754360928f4f3d5d6f74aff63b803a94f7364e6b5cc37e8ad3a406741de9a1b9c4ff69036c51fd1', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-09-30 23:23:00', '2021-09-30 23:23:00', '2022-10-01 06:23:00'),
('fb3ebba6a967865674b086901cd2007d5083b4ad011cd0c7d0893baca7bd624f941d37d42bc4e6e8', 3, 1, 'mulyadi@gmail.com', '[]', 0, '2021-09-30 23:09:56', '2021-09-30 23:09:56', '2022-10-01 06:09:56'),
('ff6a5e6b0c98b12b842dc7022025128e298dc47c541dffaa01b6f4b14346343f5b6b3dc66ac1c351', 3, 1, 'mulyadi@gmail.com', '[]', 1, '2021-10-01 02:28:29', '2021-10-01 02:28:29', '2022-10-01 09:28:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', '4uzuiZHVl27tsigTPJlN8wLSMuUB6tNLgeb5O9xw', NULL, 'http://localhost', 1, 0, 0, '2021-09-30 19:42:03', '2021-09-30 19:42:03'),
(2, NULL, 'Laravel Password Grant Client', 'IAIE6A96pgDnIAeMlAxTeuephiwtZ2G61e3GKmGz', 'users', 'http://localhost', 0, 1, 0, '2021-09-30 19:42:03', '2021-09-30 19:42:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-09-30 19:42:03', '2021-09-30 19:42:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `posting`
--

CREATE TABLE `posting` (
  `id_posting` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `judul` varchar(100) DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `komentar` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `posting`
--

INSERT INTO `posting` (`id_posting`, `id_user`, `judul`, `tanggal`, `komentar`, `created_at`, `updated_at`) VALUES
(6, 3, 'Pidato HUT RI 76', '2021-09-30', 'Realisasi investasi sekitar Rp 442 triliun dimana 51 persen ada di Pulau Jawa yang telah menyerap 600 ribuan tenaga kerja. Kolaborasi dalam dunia usaha akan membangun usaha yang berbasis teknologi,” lanjutnya, sembari menambahkan, “Mari kita saling menjaga dan saling membantu. Saya juga menyadari banyaknya kritikan terhadap pemerintah yang belum mampu menyelesaikan semuanya. Indonesia tangguh Indonesia tumbuh hanya bisa dilakukan secara bersama-sama dalam rangka meraih Indonesia Maju yang kita cita-citakan.', '2021-09-30 08:40:23', NULL),
(7, 3, '7 Pesan Kemerdekaan Untuk Para Pemuda', '2021-09-30', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '2021-10-01 08:40:36', NULL),
(8, 3, '8 Langkah Untuk Menjadi Sukses', '2021-09-30', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '2021-10-01 08:40:43', NULL),
(9, 7, 'Peraturan Baru Tentang Perjalanan Keluar Kota', '2021-10-01', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', '2021-10-01 08:40:48', NULL),
(10, 3, 'Cara Mudah Atasi Asam Lambung', '2021-10-01', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', NULL, NULL),
(11, 3, 'Cara Mudah Cek Barang Asli', '2021-10-01', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham', NULL, NULL),
(12, 3, 'Digitalisasi Gratis Untuk Desa di Luar Pulau Jawa', '2021-10-01', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel placerat lectus. Nam pellentesque rhoncus justo, in blandit ipsum finibus id. Nunc porta mi sit amet scelerisque efficitur. Pellentesque suscipit nisi eu mollis laoreet. Cras lobortis magna a eros posuere, vitae suscipit ante dapibus. Maecenas dictum, felis nec iaculis luctus, justo massa facilisis dui, nec aliquet lectus eros eu elit. Duis id odio dictum, molestie turpis non, lacinia dolor. Fusce elementum ipsum in tortor viverra, vel scelerisque mauris porta. Nunc id arcu id dolor placerat fermentum. Donec sodales purus lacus, commodo fermentum risus blandit quis. Donec sed fermentum lorem.\r\n\r\nSed elit orci, scelerisque ut massa at, interdum vehicula sapien. Sed sollicitudin tristique enim vitae iaculis. Suspendisse tincidunt, nibh eleifend ullamcorper facilisis, massa lectus dapibus felis, at efficitur sapien risus in mi. Aenean ullamcorper vulputate nunc eu viverra. Ut maximus justo et dolor efficitur vehicula quis id sem. Nulla pellentesque blandit nulla et aliquam. Donec lobortis est sed eros porttitor dictum. Duis consectetur nisl ut leo ultricies, non ultrices augue gravida. Mauris vitae nulla mauris. Vivamus ullamcorper leo nunc, sed ultricies libero tempus eget. Nunc ac libero sed arcu laoreet volutpat. Donec sed tempus arcu. Nulla elit tortor, tempus eget ultricies eget, dapibus sit amet justo. Integer placerat egestas eros, eu accumsan ipsum.', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `api_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `alamat` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hobby` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `foto` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `api_token`, `created_at`, `alamat`, `hobby`, `updated_at`, `foto`) VALUES
(1, 'anrel', 'anrelputranew@gmail.com', NULL, '$2y$10$BjwPkdX4AksW1zrjqEytS.GHJBpCSO337nj84ox.Wb5BoHhDXoLwK', NULL, NULL, '2021-09-29 08:59:10', '', '', '2021-09-29 08:59:10', NULL),
(3, 'Mulyadi', 'mulyadi@gmail.com', NULL, '$2y$10$9q21dK.nI9IEk3ryVXknNuG0AmJQAIHZPEt7IsndcEPu/8ykAMTSC', NULL, NULL, '2021-09-30 05:52:30', 'Bekasi Jawabarat', 'Futsal', '2021-09-30 05:52:30', NULL),
(4, 'Wahyu', 'wahyumulyadi10@gmail.com', NULL, '$2y$10$3xs4KRibN37LkAIm57OTsutxzvjMKela23DSe1Z3XhYvZ3Vb0WZ/W', NULL, NULL, '2021-09-30 23:37:52', NULL, NULL, '2021-09-30 23:37:52', NULL),
(5, 'aaaaaaa', 'mulya1di@gmail.com', NULL, '$2y$10$4SYNNdqjNiCnvUrT2OFuIeSbdCi85nfu7ibtgcxcqcEgARXv1TV5u', NULL, NULL, '2021-09-30 23:42:51', NULL, NULL, '2021-09-30 23:42:51', NULL),
(6, 'dadNg', 'danab@gmailm.com', NULL, '$2y$10$Ap25OSdeuQO2dgB5wtk4fOPmr6xpLJAvUoobx7rtlteHbf5feBq0G', NULL, NULL, '2021-09-30 23:43:20', NULL, NULL, '2021-09-30 23:43:20', NULL),
(7, 'Mulyadi', 'wahmulyadi23@gmail.com', NULL, '$2y$10$HHzVhVxcNrDJEUSrfyVjhuRHpYag02USoJjy22P3OU9QpNP79HLSa', NULL, NULL, '2021-10-01 01:14:14', 'jl.aja', 'nonton', '2021-10-01 01:14:14', NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indeks untuk tabel `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indeks untuk tabel `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indeks untuk tabel `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `posting`
--
ALTER TABLE `posting`
  ADD PRIMARY KEY (`id_posting`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `posting`
--
ALTER TABLE `posting`
  MODIFY `id_posting` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

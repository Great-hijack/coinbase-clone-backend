/*
 Navicat Premium Data Transfer

 Source Server         : localhost_5432
 Source Server Type    : PostgreSQL
 Source Server Version : 140001
 Source Host           : localhost:5432
 Source Catalog        : coinbase
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140001
 File Encoding         : 65001

 Date: 13/12/2021 03:07:27
*/


-- ----------------------------
-- Table structure for history
-- ----------------------------
DROP TABLE IF EXISTS "public"."history";
CREATE TABLE "public"."history" (
  "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  "exchangeTime" numeric(255),
  "coinSymbol" varchar(8) COLLATE "pg_catalog"."default",
  "balance" float4,
  "profileId" varchar(100) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of history
-- ----------------------------
INSERT INTO "public"."history" VALUES (4, 1638689108, 'ETH', 0.3, '75fi73Fke');
INSERT INTO "public"."history" VALUES (3, 1636374120, 'ETH', 0.12, '75fi73Fke');
INSERT INTO "public"."history" VALUES (2, 1636152840, 'ETH', -0.02, '75fi73Fke');
INSERT INTO "public"."history" VALUES (6, 1636146240, 'BTC', 0.012, '75fi73Fke');

-- ----------------------------
-- Primary Key structure for table history
-- ----------------------------
ALTER TABLE "public"."history" ADD CONSTRAINT "users_copy1_pkey" PRIMARY KEY ("id");

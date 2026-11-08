import { toteStylePost } from "./blog/5-cach-phoi-do-tui-tote-xanh";
import { toteCarePost } from "./blog/cach-giat-bao-quan-tui-tote-cotton";
import { toteLaptopPost } from "./blog/tui-tote-dung-laptop-cho-sinh-vien";
import { toteBudgetPost } from "./blog/tui-tote-gia-sinh-vien-duoi-150k";
import { toteBuyPost } from "./blog/mua-tui-tote-o-da-nang";
import {
  toteGuidePost,
  type BlogPost,
} from "./blog/cach-chon-tui-tote";

export type { BlogPost } from "./blog/cach-chon-tui-tote";

export const posts: BlogPost[] = [
  toteGuidePost,
  toteLaptopPost,
  toteBudgetPost,
  toteBuyPost,
  toteStylePost,
  toteCarePost,
];

export const featuredPost = toteGuidePost;

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(value: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

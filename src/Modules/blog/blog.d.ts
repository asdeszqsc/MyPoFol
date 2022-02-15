export interface PostData {
  id: number,
  postName: string,
  thumbnail: string,
  previewText: string,
  date: Date,
  userNickName: string,
  userThumbnail: string,
  likeCount: number
  tagList: Array<string>,
}

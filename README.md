# Jixuan Chen · 陈继萱

个人学术主页，静态 HTML / CSS / JavaScript，无需安装依赖或构建。默认中文，支持英文切换。

## 发布到 GitHub Pages

1. 仓库名称使用 `Chenjixuanstu.github.io`（不要在用户名后多加连字符）。
2. 将本文件夹中的**内容**上传到仓库根目录：`index.html`、`styles.css`、`script.js`、`assets/`、`.nojekyll`、`README.md`。不要再套一层文件夹。
3. 在仓库 Settings → Pages 中，选择 Deploy from a branch，分支 `main`，文件夹 `/ (root)`，保存。
4. 等待 GitHub 发布完成后访问 https://chenjixuanstu.github.io/ 。本地生成文件不代表已经发布。

## 本地预览

直接打开 `index.html`，或在本目录运行 `python -m http.server 8765`，访问 http://localhost:8765/ 。

## 修改内容

- 文案在 `index.html`。`data-zh` 与 `data-en` 分别为中文和英文，请同步修改；静态显示文字也保持一致。
- 样式在 `styles.css`，交互在 `script.js`。
- 照片：`assets/portrait.jpg`。
- 论文状态以制作时的简历为准。IJCV 标注为已录用；RealSynthMatte 标注为投稿中，MVTrackTM 标注为在研。
- CVPR 论文 BibTeX 在 `script.js`；论文图来自作者的公开仓库 https://github.com/zqyq/MVTrackTrans/blob/main/PipeLine.png 。

## 资料依据

- 用户提供的最新版简历：`陈继萱.pdf`。
- CVPR 2026 论文作者、引用与项目链接核对于 https://github.com/zqyq/MVTrackTrans 。
- 未提供确切链接的论文未添加虚构的 Paper / DOI 链接。
- 主页不包含简历 PDF 或联系电话。

## 功能

中英文切换（保留语言偏好）、响应式布局、框架图放大、BibTeX 复制 / 下载回退、键盘焦点与减少动画支持。

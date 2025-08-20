# 使用 Node 官方镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# 安装依赖（你用啥包管理器就改成啥）
RUN npm install --frozen-lockfile

# 复制源码
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 启动 Next.js
EXPOSE 3000
CMD ["npm", "start"]

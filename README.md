# Student Learning Outcome Prediction System

Dự án Student Learning Outcome Prediction là hệ thống demo phục vụ nghiên cứu nhằm dự đoán sớm kết quả học tập của sinh viên dựa trên các đặc trưng học tập (điểm số, hành vi học tập, dữ liệu lịch sử, v.v.).

Hệ thống được xây dựng với mục tiêu minh họa toàn bộ pipeline nghiên cứu từ:

Thu thập dữ liệu

Xử lý và suy luận mô hình

Cung cấp kết quả dự đoán thông qua giao diện web

## Cách chạy

### Frontend: Next.js – Backend: NestJS

Lần đầu chạy sẽ cần cài đặt `pnpm`. Chạy lệnh sau:

```bash
npm install -g pnpm@latest
```

Sau đó chạy dự án bình thường:

1. Cài đặt dependency:

```bash
pnpm install
```

2. Chạy code:

```bash
pnpm dev
```

Trang web giờ đang ở http://localhost:3000.

## Cách gọi api

Trước hết ta xem có API nào để gọi. Có thể truy cập trang http://localhost:5000/api để xem danh sách tất cả API của backend.
<img width="1901" height="855" alt="image" src="https://github.com/user-attachments/assets/275aae87-6c8c-4f32-99fc-69d292be88ee" />


Sau khi biết có API thì sử dụng httpClient từ `@/lib/client`

```tsx
import { Button } from "./components/ui/button";
import httpClient from "@/lib/client";

function App() {
  async function doSomething() {
    console.log("api result: ", await httpClient.get("/boards"));
  }
  return (
    <div>
      <h1>Welcome to the App!</h1>
      <Button onClick={doSomething}>Hello</Button>
    </div>
  );
}

export default App;
```

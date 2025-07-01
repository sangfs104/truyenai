import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const { idea, genre, length, ageGroup } = await req.json();

    const prompt = `
Bạn là một AI chuyên viết truyện sáng tạo. Hãy viết một truyện theo yêu cầu sau:
- Ý tưởng chính: ${idea}
- Thể loại: ${genre}
- Độ dài: khoảng ${length} ký tự
- Độ tuổi độc giả: ${ageGroup || "Phù hợp với mọi lứa tuổi"}
- Đảm bảo đầy đủ các phần: Mở đầu – Diễn biến – Cao trào – Kết thúc
- Văn phong trong sáng, giàu hình ảnh, không phản cảm
- Hạn chế hội thoại, không giải thích logic phép thuật
- Tuyệt đối KHÔNG chứa: bạo lực máu me, tình dục, kỳ thị chủng tộc, giới tính, chính trị cực đoan, ngôn từ tục tĩu

⚠️ Yêu cầu đầu ra:
Chỉ xuất kết quả dưới định dạng sau – KHÔNG kèm lời giải thích:
<TIEUDE>Tiêu đề truyện</TIEUDE>
<NOIDUNG>Nội dung truyện...</NOIDUNG>
`;

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.8,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const story = response.data.choices[0].message.content;
    return NextResponse.json({ story });
  } catch (error: unknown) {
    console.error('🔥 Lỗi khi gọi OpenAI:', error);

    if (axios.isAxiosError(error)) {
      console.error('🔍 Axios error response:', error.response?.data);
    }

    return NextResponse.json(
      { error: 'Lỗi khi gọi OpenAI' },
      { status: 500 }
    );
  }
}

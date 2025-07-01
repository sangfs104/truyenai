// import { NextRequest, NextResponse } from 'next/server';
// import axios from 'axios';

// export async function POST(req: NextRequest) {
//   try {
//     const { idea, genre, length, ageGroup } = await req.json();

//     const prompt = `
// Bạn là một AI chuyên viết truyện sáng tạo. Hãy viết một truyện theo yêu cầu sau:
// - Ý tưởng chính: ${idea}
// - Thể loại: ${genre}
// - Độ dài: khoảng ${length} ký tự
// - Độ tuổi độc giả: ${ageGroup || "Phù hợp với mọi lứa tuổi"}
// - Đảm bảo đầy đủ các phần: Mở đầu – Diễn biến – Cao trào – Kết thúc
// - Văn phong trong sáng, giàu hình ảnh, không phản cảm
// - Hạn chế hội thoại, không giải thích logic phép thuật
// - Tuyệt đối KHÔNG chứa: bạo lực máu me, tình dục, kỳ thị chủng tộc, giới tính, chính trị cực đoan, ngôn từ tục tĩu

// ⚠️ Yêu cầu đầu ra:
// Chỉ xuất kết quả dưới định dạng sau – KHÔNG kèm lời giải thích:
// <TIEUDE>Tiêu đề truyện</TIEUDE>
// <NOIDUNG>Nội dung truyện...</NOIDUNG>
// `;

//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: 'gpt-3.5-turbo',
//         messages: [{ role: 'user', content: prompt }],
//         temperature: 0.8,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     const story = response.data.choices[0].message.content;
//     return NextResponse.json({ story });
//   } catch (error: unknown) {
//     console.error('🔥 Lỗi khi gọi OpenAI:', error);

//     if (axios.isAxiosError(error)) {
//       console.error('🔍 Axios error response:', error.response?.data);
//     }

//     return NextResponse.json(
//       { error: 'Lỗi khi gọi OpenAI' },
//       { status: 500 }
//     );
//   }
// }
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const BANNED_WORDS = [
  "giết", "máu", "máu me", "chết", "tự sát", "tự tử", "hiếp", "loạn luân",
  "chửi", "tình dục", "dâm", "dâm đãng", "khiêu dâm", "tục tĩu",
  "dục vọng", "dương vật", "âm đạo", "kích dục", "khỏa thân", "hấp diêm",
  "bạo lực", "súng", "dao", "phân biệt", "chủng tộc", "chính trị", "khủng bố"
];

function containsBannedWords(text: string): boolean {
  const lowerText = text.toLowerCase();
  return BANNED_WORDS.some((word) => lowerText.includes(word));
}

export async function POST(req: NextRequest) {
  try {
    const { idea, genre, length, ageGroup } = await req.json();

    const prompt = `
Bạn là một AI chuyên viết truyện sáng tạo, văn phong trong sáng, giàu hình ảnh, dễ hiểu và phù hợp với mọi lứa tuổi.

Yêu cầu:
- Ý tưởng chính: ${idea}
- Thể loại: ${genre}
- Độ dài: khoảng ${length} ký tự
- Độ tuổi độc giả: ${ageGroup || "Phù hợp với mọi lứa tuổi"}

⚠️ Quy tắc nghiêm ngặt:
- KHÔNG chứa bất kỳ nội dung nhạy cảm, dung tục, tình dục, bạo lực quá mức, phân biệt chủng tộc, tôn giáo hay chính trị cực đoan.
- KHÔNG dùng ngôn từ tục tĩu hoặc từ ngữ phản cảm.
- KHÔNG giải thích logic phép thuật quá nhiều.
- KHÔNG sử dụng các từ như: máu me, giết chóc, khỏa thân, nhạy cảm, vũ khí, tự sát, khiêu dâm, chửi thề, hay từ ngữ xúc phạm.

🎯 Cấu trúc truyện cần có:
- Mở đầu – Diễn biến – Cao trào – Kết thúc

🎁 Đầu ra:
Chỉ xuất kết quả dưới định dạng sau, KHÔNG thêm giải thích:
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

    // Kiểm tra nội dung phản cảm
    if (containsBannedWords(story)) {
      return NextResponse.json(
        { error: "Nội dung không phù hợp theo nguyên tắc cộng đồng." },
        { status: 400 }
      );
    }

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

import { IconPencil, IconTrash } from '@tabler/icons-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function CertificateTable() {
  const certificates = [
    {
      id: 1,
      name: '자격증명',
      organization: '대한상공회의소',
      issueDate: '2024. 12. 08.',
      expiryDate: '2026. 12. 08.',
      score: '875',
      reference: '-',
    },
    {
      id: 2,
      name: '자격증명',
      organization: '대한상공회의소',
      issueDate: '2024. 12. 08.',
      expiryDate: '2026. 12. 08.',
      score: '875',
      reference: '-',
    },
  ];

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>자격증명</TableHead>
            <TableHead>기관명</TableHead>
            <TableHead>취득일</TableHead>
            <TableHead>만료일</TableHead>
            <TableHead className="text-center">점수</TableHead>
            <TableHead>자격증 번호</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {certificates.map((cert) => (
            <TableRow key={cert.id}>
              <TableCell>{cert.name}</TableCell>
              <TableCell>{cert.organization}</TableCell>
              <TableCell>{cert.issueDate}</TableCell>
              <TableCell>{cert.expiryDate}</TableCell>
              <TableCell className="">
                <div className="border rounded-4 bg-neutral-10 flex items-center justify-center ">
                  <span className="text-neutral-85">{cert.score}</span>
                </div>
              </TableCell>
              <TableCell>{cert.reference}</TableCell>
              <TableCell>
                <div className="flex items-center p-4 gap-6">
                  <button
                    type="button"
                    className="p-[10px] text-label-small-desktop font-[400] bg-neutral-80 text-neutral-0 rounded-4"
                  >
                    후기 입력하기
                  </button>
                  <div className="flex items-center gap-4">
                    <div
                      className="h-6 bg-neutral-30"
                      style={{
                        width: '2px',
                      }}
                    />
                    <button type="button">
                      <IconPencil width={24} height={24} color="#c2c2c2" />
                    </button>
                    <button type="button">
                      <IconTrash width={24} height={24} color="#c2c2c2" />
                    </button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

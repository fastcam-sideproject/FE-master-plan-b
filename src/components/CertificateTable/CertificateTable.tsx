import { IconPencil, IconTrash } from '@tabler/icons-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '../ui/button';

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
      reference: '11111111',
    },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[220px]">자격증명</TableHead>
          <TableHead className="h-[50px] w-40">기관명</TableHead>
          <TableHead className="w-[130px]">취득일</TableHead>
          <TableHead className="w-[130px]">만료일</TableHead>
          <TableHead className="w-[80px] text-center">점수</TableHead>
          <TableHead className="w-40">자격증 번호</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {certificates.map((cert) => (
          <TableRow key={cert.id}>
            <TableCell>{cert.name}</TableCell>
            <TableCell>{cert.organization}</TableCell>
            <TableCell>{cert.issueDate}</TableCell>
            <TableCell>{cert.expiryDate}</TableCell>
            <TableCell>
              <div className="flex items-center justify-center rounded-4 border bg-neutral-10">
                <span className="text-neutral-85">{cert.score}</span>
              </div>
            </TableCell>
            <TableCell>{cert.reference}</TableCell>
            <TableCell>
              <div className="flex items-center gap-6">
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-4 bg-neutral-70"
                  label="후기 입력하기"
                ></Button>
                <div className="flex items-center gap-4">
                  <div className="h-6 w-1 bg-neutral-20" />
                  <Button variant="none">
                    <IconPencil width={24} height={24} className="w-[24px] text-neutral-20" />
                  </Button>
                  <Button variant="none">
                    <IconTrash width={24} height={24} className="text-neutral-20" />
                  </Button>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

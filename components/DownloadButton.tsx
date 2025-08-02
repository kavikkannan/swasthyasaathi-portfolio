'use client';

import { Button } from "@/components/ui/button";

export const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/programs.pdf';
    link.download = 'SwasthyaSaathi_Programs.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      size="lg"
      variant="outline"
      onClick={handleDownload}
      className="border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-xl transform hover:scale-105 transition-all duration-200 bg-transparent cursor-pointer"
    >
      View Programs
    </Button>
  );
};

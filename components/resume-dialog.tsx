"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FileText, Download } from "lucide-react"

const RESUME_URL = "https://blobs.vusercontent.net/blob/Abhinav_overleaf_resume-FmgLqFBqWmfq3i9otgAVfzZtQmf2xG.pdf"

export function ResumeDialog() {
  const [open, setOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = RESUME_URL
    link.download = "Abhinav_Kumar_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="px-8 gap-2">
          <FileText size={18} />
          Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-card border-border overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b border-border flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold text-foreground">Resume</DialogTitle>
          <Button onClick={handleDownload} className="gap-2">
            <Download size={16} />
            Download PDF
          </Button>
        </DialogHeader>
        <div className="flex-1 h-[calc(90vh-80px)] w-full">
          <iframe
            src={`${RESUME_URL}#toolbar=0&navpanes=0&scrollbar=1`}
            className="w-full h-full border-0"
            title="Abhinav Kumar Resume"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

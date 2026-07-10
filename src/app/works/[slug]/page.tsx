import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { CaseStudyDetail } from "@/components/projects/CaseStudyDetail";
import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/footer/Footer";

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Project not found" };
  }

  return {
    title: `${caseStudy.project} — Naufal Abidin`,
    description: caseStudy.blurb,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="page-frame flex-1 flex flex-col">
      <Nav />
      <main className="flex-1">
        <CaseStudyDetail caseStudy={caseStudy} />
      </main>
      <Footer />
    </div>
  );
}

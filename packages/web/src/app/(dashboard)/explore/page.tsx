'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authFetch } from '@/lib/auth';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Agent {
  id: string;
  name: string;
  icon: string;
  role: string;
  description: string;
}

interface InspirationPrompt {
  icon: string;
  title: string;
  scenario?: string;
  prompt: string;
}

interface Pack {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  color: string;
  color_secondary: string;
  version: string;
  channels: string[];
  languages: string[];
  agents: Agent[];
  inspiration_prompts: InspirationPrompt[];
}

/* ------------------------------------------------------------------ */
/*  Featured agents — the 8 ministry specialists shown in the grid    */
/* ------------------------------------------------------------------ */

const FEATURED_IDS = [
  'grace',
  'church-sermon-prep',
  'church-sunday-school',
  'church-bible-study',
  'church-pastoral-care',
  'church-worship-planner',
  'church-communications',
  'church-prayer-journal',
];

/* ------------------------------------------------------------------ */
/*  AgentCard                                                          */
/* ------------------------------------------------------------------ */

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border bg-card p-4 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-2">
        <span className="text-2xl leading-none">{agent.icon}</span>
        <Badge variant="secondary" className="text-[10px]">
          {agent.role === 'primary' ? 'Coordinator' : 'Specialist'}
        </Badge>
      </div>
      <p className="text-sm font-semibold leading-tight">
        {agent.name.replace(/^.*?—\s*/, '')}
      </p>
      <p className="text-xs text-muted-foreground line-clamp-3">{agent.description}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PromptCard                                                         */
/* ------------------------------------------------------------------ */

function PromptCard({ prompt, onClick }: { prompt: InspirationPrompt; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex cursor-pointer flex-col items-start gap-2 rounded-lg border border-l-[3px] border-l-primary/50 p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_8px_24px_-8px_rgba(217,119,6,0.3)]"
    >
      <div className="flex w-full items-start justify-between gap-2">
        <span className="text-xl leading-none">{prompt.icon}</span>
      </div>
      <p className="text-sm font-semibold tracking-tight">{prompt.title}</p>
      {prompt.scenario && (
        <p className="text-xs text-muted-foreground">{prompt.scenario}</p>
      )}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  ExplorePage                                                        */
/* ------------------------------------------------------------------ */

export default function ExplorePage() {
  const router = useRouter();
  const [pack, setPack] = useState<Pack | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    void authFetch<{ success: boolean; data: Pack }>('/api/v1/packs/church')
      .then((res) => setPack(res.data))
      .catch(() => setError('Could not load pack data.'))
      .finally(() => setLoading(false));
  }, []);

  const handlePromptClick = (prompt: string) => {
    router.push('/conversations?prompt=' + encodeURIComponent(prompt));
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error || !pack) {
    return (
      <div className="flex h-64 items-center justify-center text-sm text-muted-foreground">
        {error || 'Pack not found.'}
      </div>
    );
  }

  const featuredAgents = pack.agents.filter((a) => FEATURED_IDS.includes(a.id));

  return (
    <div className="flex flex-col gap-10 pb-16">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden rounded-xl border bg-card p-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{ background: `radial-gradient(ellipse at 30% 50%, ${pack.color} 0%, transparent 70%)` }}
        />
        <div className="relative flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-4xl leading-none">{pack.icon}</span>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{pack.name}</h1>
              <p className="text-sm text-muted-foreground">{pack.tagline}</p>
            </div>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground">{pack.description}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Badge variant="outline">v{pack.version}</Badge>
            {pack.channels.map((c) => (
              <Badge key={c} variant="secondary" className="capitalize">
                {c}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* ── Ministry Agents ── */}
      <section className="flex flex-col gap-4">
        <div className="border-b border-border/60 pb-2">
          <h2 className="text-lg font-semibold">Ministry Agents</h2>
          <p className="text-sm text-muted-foreground">
            Grace coordinates and spawns these specialists for every ministry need.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      {/* ── Inspiration Prompts ── */}
      <section className="flex flex-col gap-4">
        <div className="border-b border-border/60 pb-2">
          <h2 className="text-lg font-semibold">Try these prompts</h2>
          <p className="text-sm text-muted-foreground">
            Click any card to open a conversation with Grace pre-filled.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pack.inspiration_prompts.map((p) => (
            <PromptCard
              key={p.title}
              prompt={p}
              onClick={() => handlePromptClick(p.prompt)}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

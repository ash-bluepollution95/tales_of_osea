import { notFound } from "next/navigation";
import { characters } from "@/lib/characters";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CharacterGallery from "@/components/character-gallery";

function Field({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <p className="text-muted-foreground text-sm">
      <strong className="text-foreground font-medium">{label}:</strong> {value}
    </p>
  );
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = characters.find((c) => c.slug === slug);

  if (!character) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>{character.name}</h1>
        <p className="text-muted-foreground mt-2 text-lg">{character.title}</p>
        <p className="text-muted-foreground mx-auto mt-2 max-w-2xl">
          {character.blurb}
        </p>
      </header>

      {/* Gallery */}
      <section className="mb-10">
        <h2 className="mb-4">Gallery</h2>
        <CharacterGallery gallery={character.gallery} />
      </section>

      {/* Sections */}
	  
			  <div className="rounded-xl border p-4">
  <span className="text-muted-foreground text-sm">Voiced by </span>
  <span className="text-sm font-medium">{character.voicedBy}</span>      </div>
  <div className="rounded-xl border p-4">
    <span className="text-muted-foreground text-sm">Character Notes </span>
  <span className="text-sm font-medium">{character.charNotes}</span>
</div>
		
      <div className="grid gap-6 md:grid-cols-2">
	  

        <Card>
          <CardHeader>
            <CardTitle>Identity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Field label="Birth Name" value={character.identity.birthName} />
            <Field label="Osenayan Name" value={character.identity.osenayanName} />
            <Field label="Eorzean Name" value={character.identity.eorzeanName} />
            <Field label="Race" value={character.identity.race} />			
            <Field label="Gender" value={character.identity.gender} />
            <Field label="Orientation" value={character.identity.orientation} />
            <Field label="Religion" value={character.identity.religion} />
            <Field label="Politics" value={character.identity.politics} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Situation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Field label="Main Class" value={character.currentSituation.mainClass} />
            <Field label="Side Class" value={character.currentSituation.sideClass} />
            <Field label="Job" value={character.currentSituation.job} />
            <Field label="Residence" value={character.currentSituation.residence} />
            <Field label="Economic Class" value={character.currentSituation.economicClass} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Field label="Age" value={character.appearance.age} />
            <Field label="Hair" value={character.appearance.hair} />
            <Field label="Eyes" value={character.appearance.eyes} />
            <Field label="Skin" value={character.appearance.skin} />
            <Field label="Height" value={character.appearance.height} />
            <Field label="Build" value={character.appearance.build} />
            <Field label="Face" value={character.appearance.face} />			
            <Field label="Body Type/Mod Style" value={character.appearance.bodyMod} />
            <Field label="Dominant Hand" value={character.appearance.dominantHand} />			
            <Field label="Outfit" value={character.appearance.outfit} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Background</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Field label="Hometown" value={character.background.hometown} />
            <Field label="Heritage" value={character.background.heritage} />
            <Field label="First Language" value={character.background.firstLanguage} />
            <Field label="Life Events" value={character.background.lifeEvents} />
			<Field label="Historical Events" value={character.background.historicalevents} />
            <Field label="Regrets" value={character.background.regrets} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Field label="Qualifications" value={character.skills.qualifications} />
            <Field label="Talents" value={character.skills.talents} />
            <Field label="Languages" value={character.skills.languages} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Qualities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Field label="Conditions" value={character.qualities.conditions} />
            <Field label="Strengths" value={character.qualities.strengths} />
            <Field label="Weaknesses" value={character.qualities.weaknesses} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Desires</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Field label="Yearning" value={character.desires.yearning} />
            <Field label="Goals" value={character.desires.goals} />
            <Field label="Wishes" value={character.desires.wishes} />
            <Field label="Dream Job" value={character.desires.dreamJob} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Field label="Fears" value={character.other.fears} />
            <Field label="Secrets" value={character.other.secrets} />
            <Field label="Habits" value={character.other.habits} />
            <Field label="Hobbies" value={character.other.hobbies} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Family</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Field label="Parents" value={character.family.parents.join(", ")} />
            <Field label="Siblings" value={character.family.siblings.join(", ")} />
            <Field label="Children" value={character.family.children} />
			<Field label="Other" value={character.family.other} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Relationships</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Field label="Friends" value={character.relationships.friends.join(", ")} />
            <Field label="Enemies" value={character.relationships.enemies.join(", ")} />
            <Field label="Partner" value={character.relationships.partner} />
            <Field label="Crush" value={character.relationships.crush} />
            <Field label="Exes" value={character.relationships.exes} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Things You Can&apos;t Get Away With</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Field label="No-Gos" value={character.noGos.join(", ")} />
          </CardContent>
        </Card>

        {character.tech ? (
          <Card>
            <CardHeader>
              <CardTitle>Tech</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <Field label="Implants" value={character.tech.implants} />
              <Field label="Genetic Modifications" value={character.tech.geneticMods} />
            </CardContent>
          </Card>
        ) : null}
      </div>
    </main>
  );
}

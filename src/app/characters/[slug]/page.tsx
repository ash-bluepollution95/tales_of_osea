import { notFound } from "next/navigation";
import { characters } from "@/lib/characters";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = characters.find((c) => c.slug === slug);

  if (!character) notFound();

return (
  <main>
    <h1>{character.name}</h1>
    <p>{character.title}</p>
    <p>{character.blurb}</p>

    <section>
      <h2>Identity</h2>
      <p>Birth Name: {character.identity.birthName}</p>
      <p>Osenayan Name: {character.identity.osenayanName}</p>
      <p>Eorzean Name: {character.identity.eorzeanName}</p>
      <p>Gender: {character.identity.gender}</p>
      <p>Orientation: {character.identity.orientation}</p>
      <p>Religion: {character.identity.religion}</p>
      <p>Politics: {character.identity.politics}</p>
    </section>
	
	    <section>
      <h2>Current Situation</h2>
      <p>Main Class: {character.currentSituation.mainClass}</p>
<p>Side Class: {character.currentSituation.sideClass}</p>
<p>Job: {character.currentSituation.job}</p>
<p>Residence: {character.currentSituation.residence}</p>
<p>Economic Class: {character.currentSituation.economicClass}</p>
    </section>
	
	<section>
  <h2>Appearance</h2>
  <p>Age: {character.appearance.age}</p>
 <p>Hair: {character.appearance.hair}</p>
<p>Eyes: {character.appearance.eyes}</p>
<p>Skin: {character.appearance.skin}</p>
<p>Height: {character.appearance.height}</p>
<p>Build: {character.appearance.build}</p>
<p>Outfit: {character.appearance.outfit}</p>
</section>

<section>
  <h2>Background</h2>
  <p>Hometown: {character.background.hometown}</p>  
  <p>Heritage: {character.background.heritage}</p>
    <p>First Language: {character.background.firstLanguage}</p>
<p>Life Events: {character.background.lifeEvents}</p>
<p>Regrets: {character.background.regrets}</p>

</section>

<section>
  <h2>Skills</h2>
  <p>Qualifications: {character.skills.qualifications}</p>  
  <p>Talents: {character.skills.talents}</p>
  <p>Languages: {character.skills.languages}</p>

</section>

<section>
  <h2>Qualities</h2>
  <p>Conditions: {character.qualities.conditions}</p>  
  <p>Strengths: {character.qualities.strengths}</p>
 <p>Weaknesses: {character.qualities.weaknesses}</p>


</section>

<section>
  <h2>Desires</h2>
  <p>Yearning: {character.desires.yearning}</p>  
  <p>Goals: {character.desires.goals}</p>
 <p>Wishes: {character.desires.wishes}</p>
    <p>Dream Job: {character.desires.dreamJob}</p>

</section>
  
  <section>
  <h2>Other</h2>
  <p>Fears: {character.other.fears}</p>  
  <p>Secrets: {character.other.secrets}</p>
 <p>Habits: {character.other.habits}</p>
     <p>Hobbies: {character.other.hobbies}</p>

</section>
 
  
<section>
  <h2>Family</h2>
  <p>Parents: {character.family.parents.join(", ")}</p>
  <p>Siblings: {character.family.siblings.join(", ")}</p>
  <p>Children: {character.family.children}</p>
</section>

   

  
<section>
  <h2>Relationships</h2>
  <p>Friends: {character.relationships.friends.join(", ")}</p>
  <p>Enemies: {character.relationships.enemies.join(", ")}</p>
  <p>Partner: {character.relationships.partner}</p>
  <p>Crush: {character.relationships.crush}</p>
  <p>Exes: {character.relationships.exes}</p>
</section>

<section>
  <h2>Things You Can&apos;t Get Away With</h2>
  <p>{character.noGos.join(", ")}</p>
</section>

<section>
  <h2>Tech</h2>
  <p>Implants: {character.tech?.implants}</p>
<p>Genetic Modifications: {character.tech?.geneticMods}</p>
</section> 
 
  </main>
);
}
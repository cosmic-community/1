import { getCharacters } from '@/lib/cosmic'
import CharacterCard from '@/components/CharacterCard'

export const metadata = {
  title: '角色 Characters · 华山论剑',
}

export default async function CharactersPage() {
  const characters = await getCharacters()

  return (
    <div className="container-page py-16">
      <header className="mb-10">
        <h1 className="font-serif font-black text-3xl sm:text-4xl text-snow-50">角色 · Characters</h1>
        <p className="text-moon mt-2">剑客与僧人，十年恩怨</p>
      </header>
      {characters.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <p className="text-moon">暂无角色内容。</p>
      )}
    </div>
  )
}
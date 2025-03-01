export default function Category({params, searchParams}){
    return(<>
        <h1>Hello {params.name}, Category: {params.category} , Niche: {searchParams.niche}</h1>
    </>)
}
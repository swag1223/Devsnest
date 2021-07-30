function Meme({ meme , setMeme}) {
    // console.log(meme);
    return (
        <div className="meme">
            <img src={meme.url} alt="gdbd" />
            <div>
                {
                    [...Array(meme.box_count)].map((val, index) => (
                        // console.log(index);
                        <input type="text" placeholder={`Meme Caption ${index + 1}`}/>
                    ))
                }

            </div>
            <div>
                <button>Create Meme</button>
                <button onClick={() => {
                    setMeme(null);
                }}>Choose Template</button>
            </div>
        </div>
    )
}

export default Meme;
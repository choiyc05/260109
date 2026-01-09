import { useState, useEffect } from "react";


const Page = () => {
    const [addword, setAddword] = useState("");

    const [data, setData] = useState([]);
    const [filtereddata, setFiltereddata] = useState([]);


    const onSubmit = e => {
        e.preventDefault();
        setData([...data, addword])
    }

    useEffect(() => {
        setFiltereddata(data)
    }, [data])

    return (
        <div className="word-container">
            <h3 className="text-center mb-4">단어장</h3>

            {/* <!-- 입력 및 수정 영역 --> */}
            <form onSubmit={onSubmit} className="input-group mb-3">
                <input type="text" name="word" className="form-control" placeholder="단어를 입력하세요" required
                    onChange={e => setAddword(e.target.value)} />
                <button type="submit" className="btn btn-primary">추가</button>
            </form>
           {/* onKeyUp=""  */}
            {/* <!-- 검색 영역 --> */}
            <input type="text" name="search" className="form-control mb-3" placeholder="검색어를 입력하세요" /> 
 

            {/* <!-- 목록 --> */}
            <ul className="list-group">
                {/* <!-- 단어를 여기에 추가됩니다 --> */}
                {
                    filtereddata.map((v, i) => {
                        return (
                            <div key={i}>
                                <li className="list-group-item d-flex justify-content-between align-items-center word-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onChange="" />
                                        <span className="ms-2">{v}</span>
                                    </div>
                                    <button type="button" className="btn btn-sm btn-outline-danger" onClick="">삭제</button>
                                </li>
                            </div>)
                    })
                }
            </ul>
        </div>
    )
}

export default Page;
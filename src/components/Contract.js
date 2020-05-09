import React from 'react'

const Contract = () => {
    return (
      <>
        <form>
            <div className="card">
                <div className="card-header bg-success text-light">検索条件</div>
                <div className="card-body bg-dark text-light">
                    <div className="form-group w-50">
                        <label htmlFor="customerName">会社名</label>
                        <input type="text" className="form-control" id="customerName" placeholder="会社名を入力してください" />
                    </div>
                    <div className="form-group form-check w-50">
                        <input type="checkbox" className="form-check-input" id="contractNow" />
                        <label className="form-check-label" htmlFor="contractNow">現在契約中</label>
                    </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary">検索</button>
                  </div>
                </div>
            </div>
        </form>
        <div className="mt-3">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">契約番号</th>
                        <th scope="col">契約開始月</th>
                        <th scope="col">契約終了月</th>
                        <th scope="col">下限</th>
                        <th scope="col">上限</th>
                        <th scope="col">契約金額</th>
                        <th scope="col">契約金額</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
      </>
    )
}

export default Contract
import { useState } from 'react'

function FilterBar({ minMonth, minYear, typeState, monthState, yearState }) {
  const [isMonth, setIsMonth] = useState(true);

  const range = (start, end) => {
    return Array.from({ length: end - start }, (_, index) => end - 1 - index);
  }

  const [month, setMonth] = useState(range(1, 12 + 1));
  const [selectedType, setSelectedType ] = typeState;
  const [selectedMonth, setSelectedMonth ] = monthState;
  const [selectedYear, setSelectedYear ] = yearState;
  
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  

  const yearOptionForMonthlyReport = range(minYear, currentYear+1);
  const yearOptionForAnnuallyReport = range(minYear, currentYear);

  return (
    <div className="row">
      <label 
        htmlFor="start-date" 
        className="col-4 col-md-3 col-lg-auto col-form-label"
      >
        Chọn loại báo cáo
      </label>
      <div className="col-8 col-md-9 col-lg mb-2">
        <select 
          className="form-select" 
          id="type" name="type"
          onChange={(event) => {
            setIsMonth(event.target.value === 'monthly');
            setSelectedType(event.target.value);
          }}
        >
          <option value="monthly" selected>Theo tháng</option>
          <option value="annually">Theo năm</option>
        </select>
      </div>
      <label 
        htmlFor="start-date" 
        className="col-4 col-md-3 col-lg-auto col-form-label"
      >
        Chọn năm
      </label>
      <div className="col-8 col-md-9 col-lg mb-2">
        <select 
          className="form-select" 
          id="year" name="year"
          onChange={(event) => {
            let year = event.target.value;
            if (event.target.value !== "all"){
              year = parseInt(year, 10); 
              if (year === currentYear) setMonth(range(1, currentMonth));
              else if (year === minYear) setMonth(range(minMonth, 12+1));
              else setMonth(range(1, 12+1)); 
            }
            else{
              setMonth(range(1, 12+1)); 
            }
            setSelectedYear(year);
            if (document.getElementById('month') === "all") setSelectedMonth("all");
          }}
        >
          <option value="all" selected>Tất cả</option>  
          {isMonth
          ? yearOptionForMonthlyReport.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))
          : yearOptionForAnnuallyReport.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
      </div>
      {isMonth && (
        <>
        <label 
          htmlFor="end-date" 
          className="col-4 col-md-3 col-lg-auto col-form-label"
        >
          Chọn tháng
        </label>
        <div className="col-8 col-md-9 col-lg mb-2">
          <select 
            className="form-select" 
            id="month" name="month"
            onChange={(event) => {
              const month = event.target.value;
              setSelectedMonth(month ==="all"?month:Number(month));
            }}
          >
            <option value="all" selected>Tất cả</option>
            {month.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        </>
      )}
    </div>
  );
}

export default FilterBar;
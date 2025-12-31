




export default function Input1({value, onChange,title,type}) {
  return (
    <>   
        <label htmlFor="">{title}</label>
        <input
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={value}
          type={type}
        />
    </>
  );
}
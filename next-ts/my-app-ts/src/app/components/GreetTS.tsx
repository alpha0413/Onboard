"use client";
export default function GreetTS() {
  const greet = (name: string) => {
    return "Hello, " + name + "!!";
  };

  return (
    <div>
      <p>{greet("John")}</p>
      <p>{greet("Taro")}</p>
    </div>
  );
}

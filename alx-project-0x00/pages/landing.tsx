import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div className="p-8">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Button Examples</h2>
        
        {/* Small buttons with different shapes */}
        <div className="flex gap-4 mb-4">
          <Button title="Small Rounded SM" size="small" shape="rounded-sm" />
          <Button title="Small Rounded MD" size="small" shape="rounded-md" />
          <Button title="Small Rounded Full" size="small" shape="rounded-full" />
        </div>
        
        {/* Medium buttons with different shapes */}
        <div className="flex gap-4 mb-4">
          <Button title="Medium Rounded SM" size="medium" shape="rounded-sm" />
          <Button title="Medium Rounded MD" size="medium" shape="rounded-md" />
          <Button title="Medium Rounded Full" size="medium" shape="rounded-full" />
        </div>
        
        {/* Large buttons with different shapes */}
        <div className="flex gap-4 mb-4">
          <Button title="Large Rounded SM" size="large" shape="rounded-sm" />
          <Button title="Large Rounded MD" size="large" shape="rounded-md" />
          <Button title="Large Rounded Full" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  )
}
export default Landing
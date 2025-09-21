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
          <Button title="Small Rounded SM" styles="" size="small" shape="rounded-sm" />
          <Button title="Small Rounded MD" styles="" size="small" shape="rounded-md" />
          <Button title="Small Rounded Full" styles="" size="small" shape="rounded-full" />
        </div>
        
        {/* Medium buttons with different shapes */}
        <div className="flex gap-4 mb-4">
          <Button title="Medium Rounded SM" styles="" size="medium" shape="rounded-sm" />
          <Button title="Medium Rounded MD" styles="" size="medium" shape="rounded-md" />
          <Button title="Medium Rounded Full" styles="" size="medium" shape="rounded-full" />
        </div>
        
        {/* Large buttons with different shapes */}
        <div className="flex gap-4 mb-4">
          <Button title="Large Rounded SM" styles="" size="large" shape="rounded-sm" />
          <Button title="Large Rounded MD" styles="" size="large" shape="rounded-md" />
          <Button title="Large Rounded Full" styles="" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  )
}
export default Landing
import React from 'react';
import { Calendar, MapPin, Users, Clock, ExternalLink, User, Database, BarChart3, Cloud, Cpu } from 'lucide-react';

const EventCard = ({ title, date, time, location, description, organizer, attendees, category, level, tools }) => {
  const categoryColors = {
    'ETL/Pipeline': 'bg-blue-100 text-blue-800',
    'Data Warehouse': 'bg-green-100 text-green-800',
    'Streaming': 'bg-purple-100 text-purple-800',
    'Cloud Platform': 'bg-orange-100 text-orange-800',
    'Analytics': 'bg-red-100 text-red-800',
    'MLOps': 'bg-pink-100 text-pink-800',
    'Database': 'bg-indigo-100 text-indigo-800',
    'Visualization': 'bg-yellow-100 text-yellow-800'
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'ETL/Pipeline': return <Database className="w-8 h-8 text-blue-600" />;
      case 'Data Warehouse': return <Cloud className="w-8 h-8 text-green-600" />;
      case 'Streaming': return <BarChart3 className="w-8 h-8 text-purple-600" />;
      case 'Cloud Platform': return <Cloud className="w-8 h-8 text-orange-600" />;
      case 'Analytics': return <BarChart3 className="w-8 h-8 text-red-600" />;
      case 'MLOps': return <Cpu className="w-8 h-8 text-pink-600" />;
      case 'Database': return <Database className="w-8 h-8 text-indigo-600" />;
      case 'Visualization': return <BarChart3 className="w-8 h-8 text-yellow-600" />;
      default: return <Database className="w-8 h-8 text-gray-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
            {getCategoryIcon(category)}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[category]}`}>
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-gray-500 font-medium">{level}</p>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <p className="text-xs text-gray-500 font-medium mb-1">Tools & Technologies:</p>
          <div className="flex flex-wrap gap-1">
            {tools.map((tool, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <User className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>By {organizer}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{attendees} attending</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            Join Workshop
          </button>
          <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CarnivalAwning = () => {
  return (
    <div className="relative h-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-600"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full bg-white"
            style={{
              left: `${i * 5}%`,
              width: '2.5%',
              transform: 'skewX(-15deg)',
              transformOrigin: 'top'
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-red-700 shadow-lg"></div>
      <div className="absolute -bottom-2 left-0 right-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="inline-block w-8 h-6 bg-red-600 border-l-2 border-r-2 border-red-700"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

const DataEngineeringBoard = () => {
  const dataEvents = [
    {
      title: "Apache Airflow Deep Dive",
      category: "ETL/Pipeline",
      level: "Intermediate",
      date: "June 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Data Center Downtown",
      description: "Master workflow orchestration with Apache Airflow. Build complex data pipelines, manage dependencies, and monitor data flows.",
      organizer: "Sarah Chen",
      attendees: 45,
      tools: ["Airflow", "Python", "Docker", "PostgreSQL"]
    },
    {
      title: "Snowflake Data Warehouse",
      category: "Data Warehouse",
      level: "Advanced",
      date: "June 18, 2025",
      time: "7:00 PM - 9:30 PM",
      location: "Cloud Computing Hub",
      description: "Advanced Snowflake techniques including clustering, time travel, zero-copy cloning, and performance optimization strategies.",
      organizer: "Mike Rodriguez",
      attendees: 32,
      tools: ["Snowflake", "SQL", "dbt", "Python"]
    },
    {
      title: "Kafka Streaming Workshop",
      category: "Streaming",
      level: "Intermediate",
      date: "June 20, 2025",
      time: "6:30 PM - 8:30 PM",
      location: "Streaming Analytics Lab",
      description: "Real-time data processing with Apache Kafka. Build streaming applications, handle backpressure, and ensure data consistency.",
      organizer: "Dr. Amanda Foster",
      attendees: 28,
      tools: ["Kafka", "Kafka Streams", "Java", "Confluent"]
    },
    {
      title: "AWS Data Engineering",
      category: "Cloud Platform",
      level: "Intermediate",
      date: "June 22, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "AWS Training Center",
      description: "Build scalable data pipelines on AWS using Glue, EMR, Redshift, and Lambda. Infrastructure as Code with CloudFormation.",
      organizer: "Alex Kim",
      attendees: 38,
      tools: ["AWS Glue", "EMR", "Redshift", "Lambda", "S3"]
    },
    {
      title: "dbt Analytics Engineering",
      category: "Analytics",
      level: "Beginner",
      date: "June 25, 2025",
      time: "6:00 PM - 8:30 PM",
      location: "Analytics Workshop Space",
      description: "Transform your data warehouse with dbt. Learn modeling, testing, documentation, and deployment best practices.",
      organizer: "Jennifer Liu",
      attendees: 41,
      tools: ["dbt", "SQL", "Git", "Snowflake", "BigQuery"]
    },
    {
      title: "MLOps Pipeline Design",
      category: "MLOps",
      level: "Advanced",
      date: "June 27, 2025",
      time: "5:30 PM - 8:00 PM",
      location: "ML Engineering Center",
      description: "Build ML pipelines from data ingestion to model deployment. Feature stores, model monitoring, and A/B testing.",
      organizer: "David Park",
      attendees: 29,
      tools: ["MLflow", "Kubeflow", "Docker", "Kubernetes", "Python"]
    },
    {
      title: "ClickHouse Analytics",
      category: "Database",
      level: "Intermediate",
      date: "June 29, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Database Performance Lab",
      description: "High-performance analytics with ClickHouse. Columnar storage, materialized views, and real-time analytics at scale.",
      organizer: "Maria Gonzalez",
      attendees: 52,
      tools: ["ClickHouse", "SQL", "Python", "Grafana"]
    },
    {
      title: "Data Quality & Testing",
      category: "Analytics",
      level: "Intermediate",
      date: "July 1, 2025",
      time: "6:30 PM - 9:00 PM",
      location: "Quality Assurance Hub",
      description: "Implement data quality frameworks, automated testing, and monitoring. Great Expectations, data profiling, and anomaly detection.",
      organizer: "Robert Johnson",
      attendees: 36,
      tools: ["Great Expectations", "dbt", "Python", "Pandas"]
    },
    {
      title: "Delta Lake Architecture",
      category: "Data Warehouse",
      level: "Advanced",
      date: "July 3, 2025",
      time: "7:00 PM - 9:30 PM",
      location: "Lakehouse Workshop",
      description: "Build modern data lakehouses with Delta Lake. ACID transactions, time travel, schema evolution, and performance tuning.",
      organizer: "Emma Thompson",
      attendees: 31,
      tools: ["Delta Lake", "Spark", "Python", "Databricks"]
    },
    {
      title: "Tableau Dashboard Design",
      category: "Visualization",
      level: "Beginner",
      date: "July 5, 2025",
      time: "6:00 PM - 8:30 PM",
      location: "Visualization Studio",
      description: "Create compelling data visualizations and interactive dashboards. Best practices for storytelling with data and user experience.",
      organizer: "Kevin Zhang",
      attendees: 44,
      tools: ["Tableau", "SQL", "Python", "Excel"]
    },
    {
      title: "Spark Performance Tuning",
      category: "ETL/Pipeline",
      level: "Advanced",
      date: "July 8, 2025",
      time: "6:30 PM - 9:00 PM",
      location: "Big Data Processing Center",
      description: "Optimize Apache Spark jobs for maximum performance. Memory management, partitioning strategies, and cluster configuration.",
      organizer: "Dr. Priya Patel",
      attendees: 39,
      tools: ["Apache Spark", "Scala", "Python", "HDFS", "YARN"]
    },
    {
      title: "Google Cloud Data Fusion",
      category: "Cloud Platform",
      level: "Intermediate",
      date: "July 10, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Google Cloud Training",
      description: "Build no-code/low-code data pipelines with Cloud Data Fusion. Integration with BigQuery, Dataflow, and Pub/Sub.",
      organizer: "Carlos Mendez",
      attendees: 33,
      tools: ["Data Fusion", "BigQuery", "Dataflow", "Pub/Sub", "GCS"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <CarnivalAwning />
      
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 drop-shadow-lg">
              Data Engineering Workshops
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master the art of data engineering! Join hands-on workshops covering ETL pipelines, 
              data warehousing, streaming analytics, and modern data stack technologies.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dataEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </main>

      <footer className="bg-red-600 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-red-100">
            📊 Built with React • Empowering Data Engineers 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DataEngineeringBoard;